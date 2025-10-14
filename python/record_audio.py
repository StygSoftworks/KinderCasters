#!/usr/bin/env python3
"""
Alphabet Audio Recorder & Splitter
Record all 26 letters, then split and clean them into individual files.

Installation:
    pip install sounddevice scipy numpy noisereduce pydub

Usage:
    python audio_recorder.py

Author: Claude
"""

import sounddevice as sd
import numpy as np
from scipy.io import wavfile
from scipy import signal
import noisereduce as nr
from pydub import AudioSegment
import os
import sys

class AlphabetRecorder:
    def __init__(self, sample_rate=44100):
        self.sample_rate = sample_rate
        self.recording = None
        self.alphabet = list('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        
    def record_audio(self, duration=None):
        """Record audio from microphone."""
        print("\n🎤 RECORDING ALPHABET")
        print("=" * 50)
        print("Say each letter clearly with a pause between:")
        print("A... B... C... D... etc.")
        print("\nPress Ctrl+C to stop recording")
        print("=" * 50)
        
        try:
            if duration:
                print(f"\nRecording for {duration} seconds...")
                recording = sd.rec(
                    int(duration * self.sample_rate),
                    samplerate=self.sample_rate,
                    channels=1,
                    dtype='float32'
                )
                sd.wait()
            else:
                print("\nRecording... (Press Ctrl+C to stop)")
                recording = sd.rec(
                    int(300 * self.sample_rate),  # Max 5 minutes
                    samplerate=self.sample_rate,
                    channels=1,
                    dtype='float32'
                )
                try:
                    sd.wait()
                except KeyboardInterrupt:
                    sd.stop()
                    # Get only the recorded portion
                    current_frame = sd.get_stream().time
                    recording = recording[:int(current_frame * self.sample_rate)]
            
            self.recording = recording
            print("✅ Recording complete!")
            return recording
            
        except KeyboardInterrupt:
            print("\n❌ Recording cancelled")
            return None
        except Exception as e:
            print(f"\n❌ Error: {e}")
            return None
    
    def save_recording(self, filename="alphabet_recording.wav"):
        """Save the full recording."""
        if self.recording is None:
            print("❌ No recording to save")
            return False
        
        # Normalize to 16-bit PCM
        audio_int16 = np.int16(self.recording * 32767)
        wavfile.write(filename, self.sample_rate, audio_int16)
        print(f"💾 Saved recording to {filename}")
        return True
    
    def detect_speech_segments(self, audio, min_silence_duration=0.3, threshold_percentile=10):
        """Automatically detect where each letter is spoken."""
        # Calculate energy envelope
        audio_abs = np.abs(audio)
        
        # Smooth the signal
        window_size = int(0.05 * self.sample_rate)  # 50ms windows
        envelope = np.convolve(audio_abs.flatten(), np.ones(window_size)/window_size, mode='same')
        
        # Find threshold
        threshold = np.percentile(envelope, threshold_percentile)
        
        # Find speech regions
        is_speech = envelope > threshold
        
        # Find transitions
        diff = np.diff(is_speech.astype(int))
        starts = np.where(diff == 1)[0]
        ends = np.where(diff == -1)[0]
        
        # Clean up segments
        segments = []
        min_silence_samples = int(min_silence_duration * self.sample_rate)
        
        for i in range(min(len(starts), len(ends))):
            start = starts[i]
            end = ends[i] if i < len(ends) else len(audio)
            
            # Merge segments that are too close
            if segments and start - segments[-1][1] < min_silence_samples:
                segments[-1] = (segments[-1][0], end)
            else:
                segments.append((start, end))
        
        return segments
    
    def manual_split(self):
        """Manually input timestamps for each letter."""
        print("\n✂️  MANUAL SPLIT MODE")
        print("=" * 50)
        print("Play the recording and note the timestamp for each letter")
        print("Format: Enter time in seconds (e.g., 0.5, 1.2, 2.0)")
        print("=" * 50)
        
        timestamps = []
        for i, letter in enumerate(self.alphabet):
            try:
                time_str = input(f"Timestamp for letter {letter} (or 'q' to finish): ")
                if time_str.lower() == 'q':
                    break
                time = float(time_str)
                timestamps.append((letter, time))
            except ValueError:
                print("Invalid input, skipping...")
                continue
        
        return timestamps
    
    def clean_audio(self, audio, aggressive=True):
        """Clean audio: remove noise, normalize, compress."""
        print("🧹 Cleaning audio...", end=' ', flush=True)
        
        # Ensure audio is the right shape
        audio = audio.flatten() if len(audio.shape) > 1 else audio
        
        # 1. Noise reduction
        if aggressive:
            # More aggressive noise reduction
            audio_clean = nr.reduce_noise(
                y=audio,
                sr=self.sample_rate,
                stationary=True,
                prop_decrease=0.8
            )
        else:
            audio_clean = nr.reduce_noise(
                y=audio,
                sr=self.sample_rate,
                stationary=False,
                prop_decrease=0.6
            )
        
        # 2. High-pass filter (remove rumble below 200Hz)
        sos = signal.butter(4, 200, 'hp', fs=self.sample_rate, output='sos')
        audio_clean = signal.sosfilt(sos, audio_clean)
        
        # 3. Low-pass filter (remove high freq noise above 3500Hz)
        sos = signal.butter(4, 3500, 'lp', fs=self.sample_rate, output='sos')
        audio_clean = signal.sosfilt(sos, audio_clean)
        
        # 4. Normalize
        max_val = np.max(np.abs(audio_clean))
        if max_val > 0:
            audio_clean = audio_clean / max_val * 0.9
        
        print("✅")
        return audio_clean
    
    def trim_silence(self, audio, threshold_db=-40, chunk_size=10):
        """Remove silence from beginning and end."""
        # Convert to AudioSegment for easier processing
        audio_int16 = np.int16(audio * 32767)
        audio_segment = AudioSegment(
            audio_int16.tobytes(),
            frame_rate=self.sample_rate,
            sample_width=2,
            channels=1
        )
        
        # Trim silence
        try:
            trimmed = audio_segment.strip_silence(
                silence_len=chunk_size,
                silence_thresh=threshold_db,
                padding=50  # Keep 50ms padding
            )
            
            # Convert back to numpy
            samples = np.array(trimmed.get_array_of_samples())
            return samples.astype(np.float32) / 32768.0
        except:
            # If trimming fails, return original
            return audio
    
    def split_and_save(self, timestamps=None, auto_detect=True, output_dir="letters"):
        """Split recording into individual letter files."""
        if self.recording is None:
            print("❌ No recording to split")
            return
        
        # Create output directory
        os.makedirs(output_dir, exist_ok=True)
        
        audio = self.recording.flatten()
        
        if auto_detect:
            print("\n🔍 Auto-detecting speech segments...")
            segments = self.detect_speech_segments(audio)
            print(f"Found {len(segments)} segments")
            
            if len(segments) < 26:
                print(f"⚠️  Warning: Found only {len(segments)} segments, expected 26")
                print("Tip: Speak more clearly with longer pauses between letters")
            elif len(segments) > 26:
                print(f"⚠️  Warning: Found {len(segments)} segments, expected 26")
                print("Using first 26 segments...")
                segments = segments[:26]
            
            print("\n📝 Processing letters:")
            print("-" * 50)
            
            # Process each segment
            for i, (start, end) in enumerate(segments):
                if i >= 26:
                    break
                
                letter = self.alphabet[i]
                print(f"{letter}: ", end='', flush=True)
                
                # Extract segment
                segment = audio[start:end]
                
                # Clean the audio
                cleaned = self.clean_audio(segment, aggressive=True)
                
                # Trim silence
                trimmed = self.trim_silence(cleaned)
                
                # Save
                filename = os.path.join(output_dir, f"letter_{letter}.wav")
                audio_int16 = np.int16(trimmed * 32767)
                wavfile.write(filename, self.sample_rate, audio_int16)
                print(f"💾 Saved")
            
        else:
            # Manual timestamps
            if not timestamps:
                timestamps = self.manual_split()
            
            print("\n📝 Processing letters:")
            print("-" * 50)
            
            for i, (letter, time) in enumerate(timestamps):
                print(f"{letter}: ", end='', flush=True)
                
                start_sample = int(time * self.sample_rate)
                
                # Determine end sample
                if i < len(timestamps) - 1:
                    end_sample = int(timestamps[i + 1][1] * self.sample_rate)
                else:
                    end_sample = len(audio)
                
                # Extract and process
                segment = audio[start_sample:end_sample]
                cleaned = self.clean_audio(segment)
                trimmed = self.trim_silence(cleaned)
                
                # Save
                filename = os.path.join(output_dir, f"letter_{letter}.wav")
                audio_int16 = np.int16(trimmed * 32767)
                wavfile.write(filename, self.sample_rate, audio_int16)
                print(f"💾 Saved")
        
        print("-" * 50)
        print(f"\n🎉 All letters saved to '{output_dir}/' directory!")
        print(f"📂 Total files: {len(os.listdir(output_dir))}")


def main():
    print("\n" + "=" * 60)
    print("        ALPHABET AUDIO RECORDER & SPLITTER")
    print("=" * 60)
    
    recorder = AlphabetRecorder()
    
    # Menu
    print("\n📋 Options:")
    print("  1. Record now (auto-detect letters) ⭐ RECOMMENDED")
    print("  2. Record now (manual timestamps)")
    print("  3. Process existing file")
    print("  4. List audio devices")
    
    choice = input("\n👉 Choose option (1-4): ").strip()
    
    if choice == '1':
        # Record with auto-detection
        recording = recorder.record_audio()
        if recording is not None:
            recorder.save_recording()
            recorder.split_and_save(auto_detect=True)
            print("\n✨ Done! Check the 'letters/' folder for your audio files.")
    
    elif choice == '2':
        # Record with manual split
        recording = recorder.record_audio()
        if recording is not None:
            recorder.save_recording()
            
            print("\n▶️  Playing back recording...")
            sd.play(recording, recorder.sample_rate)
            sd.wait()
            
            recorder.split_and_save(auto_detect=False)
            print("\n✨ Done! Check the 'letters/' folder for your audio files.")
    
    elif choice == '3':
        # Process existing file
        filename = input("📁 Enter filename: ").strip()
        try:
            sample_rate, audio = wavfile.read(filename)
            recorder.sample_rate = sample_rate
            
            # Convert to float32
            if audio.dtype == np.int16:
                recorder.recording = audio.astype(np.float32) / 32768.0
            elif audio.dtype == np.int32:
                recorder.recording = audio.astype(np.float32) / 2147483648.0
            else:
                recorder.recording = audio.astype(np.float32)
            
            auto = input("🤖 Auto-detect letters? (y/n): ").strip().lower() == 'y'
            recorder.split_and_save(auto_detect=auto)
            print("\n✨ Done! Check the 'letters/' folder for your audio files.")
        except FileNotFoundError:
            print(f"❌ Error: File '{filename}' not found")
        except Exception as e:
            print(f"❌ Error loading file: {e}")
    
    elif choice == '4':
        # List audio devices
        print("\n🎤 Available audio devices:")
        print(sd.query_devices())
        print("\nTo use a specific device, set it as default:")
        print("  sd.default.device = DEVICE_NUMBER")
    
    else:
        print("❌ Invalid option")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n👋 Goodbye!")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        sys.exit(1)
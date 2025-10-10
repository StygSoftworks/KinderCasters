import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Shield, Printer, Globe, Sparkles, BookOpen, Info, Wand2, Volume2, Eye, Music, Baby, Bug, Users, Hash, Coffee } from 'lucide-react';
import Navigation from '../components/Navigation';
import InfoSection from '../components/InfoSection';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Info className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            About This Project
          </h1>
          <Sparkles className="w-10 h-10 text-cyan-600" />
        </div>

        <div className="space-y-8">
          <InfoSection
            icon={<Heart className="w-8 h-8 text-red-500" />}
            title="Our Mission"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              KinderCasters was created to make early literacy and numeracy fun and engaging for toddlers and preschoolers ages 2-5. By combining simple learning concepts with magical creatures and colorful characters, we help little ones build their first foundations in ABCs and 123s through playful storytelling.
            </p>
          </InfoSection>

          <InfoSection
            icon={<BookOpen className="w-8 h-8 text-blue-600" />}
            title="Educational Approach"
          >
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-blue-500" />
                  <Volume2 className="w-6 h-6 text-blue-500" />
                  Multi-Sensory Learning
                </h3>
                <p className="leading-relaxed">
                  Each flashcard engages multiple senses: visual design, audio pronunciation, and tactile interaction through card flipping. This reinforces memory and comprehension.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Music className="w-6 h-6 text-purple-500" />
                  Rhyme and Rhythm
                </h3>
                <p className="leading-relaxed">
                  Every card includes a simple rhyme that helps children remember the letter, word, and concept through phonetic patterns and musicality.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Baby className="w-6 h-6 text-pink-500" />
                  Age-Appropriate Definitions
                </h3>
                <p className="leading-relaxed">
                  Complex vocabulary is explained in simple, child-friendly language that builds understanding without overwhelming young learners.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Wand2 className="w-6 h-6 text-purple-500" />
                  Fantasy Context
                </h3>
                <p className="leading-relaxed">
                  Using simple magical themes provides a playful context that makes letters and numbers exciting and memorable for very young children.
                </p>
              </div>
            </div>
          </InfoSection>

          <InfoSection
            icon={<Sparkles className="w-8 h-8 text-purple-600" />}
            title="Content Overview"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-lg text-gray-800">Creatures</h3>
                </div>
                <p className="text-gray-700 text-sm">26 alphabet cards featuring magical beings from Angels to Zombies</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-lg text-gray-800">Magic Words</h3>
                </div>
                <p className="text-gray-700 text-sm">26 vocabulary cards teaching important concepts and character traits</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-orange-600" />
                  <Hash className="w-6 h-6 text-red-600" />
                  <h3 className="font-bold text-lg text-gray-800">Heroes & Numbers</h3>
                </div>
                <p className="text-gray-700 text-sm">26 character cards plus 10 number cards for counting practice</p>
              </div>
            </div>
          </InfoSection>

          <InfoSection
            icon={<Shield className="w-8 h-8 text-green-600" />}
            title="Privacy & Safety"
          >
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>No user accounts or registration required</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>No data collection or tracking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>No external communications or advertisements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>All content is child-appropriate and educational</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Follows WCAG accessibility guidelines</span>
              </li>
            </ul>
          </InfoSection>

          <InfoSection
            icon={<Globe className="w-8 h-8 text-cyan-600" />}
            title="Technical Features"
          >
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span>Works completely offline after initial load</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span>Responsive design for desktop and tablet devices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span>Audio pronunciation using Web Speech API</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span>Smooth animations and transitions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span>
                <span>Static website with no server dependencies</span>
              </li>
            </ul>
          </InfoSection>

          <InfoSection
            icon={<Printer className="w-8 h-8 text-orange-600" />}
            title="For Parents & Teachers"
          >
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                This website is designed to support literacy and numeracy education both at home and in the classroom. Here are some suggested uses:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Daily letter or number practice sessions</li>
                <li>Vocabulary building exercises</li>
                <li>Phonics and rhyming practice</li>
                <li>Print flashcards for hands-on activities</li>
                <li>Group learning in classroom settings</li>
                <li>Independent exploration for early readers</li>
              </ul>
              <p className="leading-relaxed mt-4">
                The print function (Ctrl+P or Cmd+P) is optimized to create physical flashcards that can be cut out and used for various learning activities.
              </p>
            </div>
          </InfoSection>
        </div>

        <div className="mt-12 space-y-8">
          <div className="text-center">
            <Link
              to="/portal"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Learning Now
            </Link>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center border-2 border-yellow-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className="w-8 h-8 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-800">Support This Project</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              If you find KinderCasters helpful for your little learners, consider supporting the project with a small contribution. Your support helps keep this resource free and accessible for all families.
            </p>
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
              className="inline-block"
            >
              <input type="hidden" name="business" value="weatoria@gmail.com" />
              <input type="hidden" name="no_recurring" value="0" />
              <input type="hidden" name="currency_code" value="USD" />
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Coffee className="w-6 h-6" />
                Buy Me an Espresso
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

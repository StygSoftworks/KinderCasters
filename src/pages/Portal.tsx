import { Sparkles, BookOpen, Users, Wand2, MousePointerClick, Volume2, RotateCcw, Printer, Target, Zap, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import PortalCard from '../components/PortalCard';
import InfoSection from '../components/InfoSection';

export default function Portal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <PageHeader
          icons={[
            <Star className="w-12 h-12 text-purple-500 animate-pulse" />,
            <Sparkles className="w-16 h-16 text-pink-500" />,
            <Star className="w-12 h-12 text-rose-500 animate-pulse" />
          ]}
          title="Choose Your Learning Adventure"
          subtitle="Select a category to explore magical flashcards"
          subtitleIcons={[
            <Wand2 className="w-6 h-6 text-purple-600" />,
            <Zap className="w-6 h-6 text-pink-600" />
          ]}
          titleGradient="from-purple-600 via-pink-600 to-rose-600"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <PortalCard
            title="Creatures"
            description="Meet amazing magical creatures from A to Z!"
            details="26 alphabet cards"
            icon={<Sparkles className="w-16 h-16" />}
            gradient="from-green-400 to-emerald-500"
            to="/flashcards/creatures"
          />

          <PortalCard
            title="Magic Words"
            description="Learn powerful words and their meanings!"
            details="26 vocabulary cards"
            icon={<BookOpen className="w-16 h-16" />}
            gradient="from-blue-400 to-cyan-500"
            to="/flashcards/magic-words"
          />

          <PortalCard
            title="Heroes & Villains"
            description="Discover legendary characters and numbers!"
            details="26 character cards + 10 number cards"
            icon={<Users className="w-16 h-16" />}
            gradient="from-orange-400 to-red-500"
            to="/flashcards/heroes-villains"
          />
        </div>

        <InfoSection
          icon={<Sparkles className="w-8 h-8 text-purple-600" />}
          title="How to Use the Flashcards"
          borderColor="border-purple-200"
        >
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-600 flex items-center gap-2">
                <Wand2 className="w-6 h-6" />
                Interactive Learning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <MousePointerClick className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span>Click any card to flip and see details</span>
                </li>
                <li className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span>Tap the speaker to hear pronunciation</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span>Read the rhyme to remember better</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span>Learn definitions in simple words</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-600 flex items-center gap-2">
                <Star className="w-6 h-6" />
                Tips for Learning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span>Practice one category at a time</span>
                </li>
                <li className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span>Focus on 5-7 cards per session</span>
                </li>
                <li className="flex items-center gap-2">
                  <RotateCcw className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span>Review previously learned cards</span>
                </li>
                <li className="flex items-center gap-2">
                  <Printer className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span>Print cards for offline practice</span>
                </li>
              </ul>
            </div>
          </div>
        </InfoSection>
      </div>
    </div>
  );
}

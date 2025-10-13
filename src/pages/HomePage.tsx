import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, Users, Info, Star, Wand2, Zap, MousePointerClick, Volume2, Printer, Heart, Smile, Baby } from 'lucide-react';
import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import FeatureCard from '../components/FeatureCard';
import InfoSection from '../components/InfoSection';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import LocalSEOHead from '../components/LocalSEOHead';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <LocalBusinessSchema />
      <LocalSEOHead
        title="KinderCasters - Early Literacy & Numeracy for Ages 2-5"
        description="Interactive flashcards for toddlers and preschoolers. Learn ABCs, 123s, and vocabulary through magical creatures and playful storytelling. Free online educational resources available worldwide."
      />
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <PageHeader
          icons={[
            <Sparkles className="w-12 h-12 text-yellow-500 animate-pulse" />,
            <Wand2 className="w-16 h-16 text-orange-600" />,
            <Star className="w-12 h-12 text-pink-500 animate-pulse" />
          ]}
          title="KinderCasters"
          subtitle="Magical Learning for Little Learners"
          subtitleIcons={[
            <Baby className="w-8 h-8 text-orange-600" />,
            <Smile className="w-8 h-8 text-orange-600" />
          ]}
          action={
            <Link
              to="/portal"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-6 h-6" />
              Enter the Portal
              <Sparkles className="w-6 h-6" />
            </Link>
          }
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Link  to="/portal">
          
          <FeatureCard
            icon={<Sparkles className="w-12 h-12" />}
            title="78 Flashcards"
            description="Learn all 26 letters plus numbers 0-9 with magical creatures and heroes"
            gradient="from-green-400 to-emerald-500"
          />
</Link>
          <FeatureCard
            icon={<BookOpen className="w-12 h-12" />}
            title="Interactive Learning"
            description="Flip cards to reveal rhymes, definitions, and hear pronunciations"
            gradient="from-blue-400 to-cyan-500"
          />

          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Ages 2-5"
            description="Perfect for toddlers and preschoolers learning their ABCs and 123s"
            gradient="from-orange-400 to-red-500"
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <InfoSection
            icon={<BookOpen className="w-8 h-8 text-orange-600" />}
            title="How It Works"
            borderColor="border-amber-200"
          >
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3 items-center">
                <Star className="flex-shrink-0 w-8 h-8 text-orange-500" />
                <span>Choose a category from the Flashcards Portal</span>
              </li>
              <li className="flex gap-3 items-center">
                <MousePointerClick className="flex-shrink-0 w-8 h-8 text-orange-500" />
                <span>Click any card to flip and see the educational content</span>
              </li>
              <li className="flex gap-3 items-center">
                <Volume2 className="flex-shrink-0 w-8 h-8 text-orange-500" />
                <span>Tap the speaker icon to hear correct pronunciation</span>
              </li>
              <li className="flex gap-3 items-center">
                <Printer className="flex-shrink-0 w-8 h-8 text-orange-500" />
                <span>Print cards for offline learning activities</span>
              </li>
            </ol>
          </InfoSection>

          <InfoSection
            icon={<Wand2 className="w-8 h-8 text-purple-600" />}
            title="Why Magical Themes?"
            borderColor="border-amber-200"
          >
            <div className="text-gray-700 space-y-3">
              <p className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <span>Young children love magical stories and fantasy characters that spark their imagination.</span>
              </p>
              <p className="flex items-start gap-2">
                <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <span>Simple, colorful creatures and characters make learning letters and numbers fun and memorable.</span>
              </p>
              <p className="flex items-start gap-2">
                <Smile className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <span>All content is designed specifically for toddlers and preschoolers with simple words and bright visuals.</span>
              </p>
            </div>
          </InfoSection>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
          >
            <Info className="w-5 h-5" />
            Learn more about this project
          </Link>
        </div>
      </div>
    </div>
  );
}

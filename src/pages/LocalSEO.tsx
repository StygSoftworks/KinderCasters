import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import LocalSEOHead from '../components/LocalSEOHead';
import NAPInfo from '../components/NAPInfo';
import LocationContent from '../components/LocationContent';
import GoogleBusinessGuide from '../components/GoogleBusinessGuide';

export default function LocalSEO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <LocalBusinessSchema />
      <LocalSEOHead
        title="Business Information & Contact"
        description="Learn about KinderCasters Learning Center, a fully online educational platform providing early childhood education resources worldwide."
        keywords={['online education', 'early childhood learning', 'educational platform', 'online learning resources']}
      />
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Globe className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            Business Info & Contact
          </h1>
          <Mail className="w-10 h-10 text-cyan-600" />
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <NAPInfo variant="full" />
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Quick Reference</h3>
                <NAPInfo variant="compact" />
              </div>
            </div>
          </div>

          <LocationContent />

          <GoogleBusinessGuide />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6 md:p-8 border-2 border-green-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">SEO Implementation Status</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="text-gray-700">Structured Data Markup</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="text-gray-700">Business Information</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="text-gray-700">Educational Keywords</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="text-gray-700">Meta Tags</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="text-gray-700">Content Optimization</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="text-gray-700">Global Availability</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="text-gray-700">Open Graph Tags</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="text-gray-700">Schema.org Markup</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/portal"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Learning Materials
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <NAPInfo variant="compact" className="text-gray-300" />
        </div>
      </footer>
    </div>
  );
}

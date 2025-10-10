import { Globe, Users, Award, Clock } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

export default function LocationContent() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Globe className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Serving Families Worldwide
        </h2>
      </div>

      <div className="space-y-6">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            <strong>{businessInfo.name}</strong> is a fully online educational platform providing early childhood education resources to families and educators around the world.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our platform offers 24/7 online access to educational flashcards and learning materials,
            making quality early literacy and numeracy education accessible to parents, teachers,
            and caregivers wherever they are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-800">Global Reach</h3>
            </div>
            <p className="text-sm text-gray-600">
              Trusted by families worldwide for quality educational content
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-gray-800">Proven Methods</h3>
            </div>
            <p className="text-sm text-gray-600">
              Research-based learning approaches developed by experienced educators
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-cyan-600" />
              <h3 className="font-bold text-gray-800">Always Available</h3>
            </div>
            <p className="text-sm text-gray-600">
              Access our complete library anytime, from anywhere in the world
            </p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mt-6">
          <h3 className="font-bold text-lg text-gray-800 mb-4">Our Reach</h3>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700">{businessInfo.servedAreas[0]}</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border-2 border-blue-200">
          <h3 className="font-bold text-lg text-gray-800 mb-3">
            Looking for Online Educational Resources?
          </h3>
          <p className="text-gray-700 mb-4">
            {businessInfo.name} offers free, high-quality learning materials perfect for homeschoolers,
            preschools, and families everywhere. Our interactive
            flashcards make early literacy fun and engaging for children ages 2-5.
          </p>
          <div className="flex flex-wrap gap-2">
            {businessInfo.keywords.slice(0, 6).map((keyword, index) => (
              <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

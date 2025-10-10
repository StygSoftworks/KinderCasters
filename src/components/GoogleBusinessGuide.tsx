import { CheckCircle, ExternalLink, Star, Image, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

export default function GoogleBusinessGuide() {
  const steps = [
    {
      title: "Claim Your Google Business Profile",
      description: "Visit Google Business Profile and sign in with your Google account",
      link: "https://www.google.com/business/",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Verify Your Business",
      description: "Complete the verification process via postcard, phone, or email",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Complete Your Profile",
      description: "Add accurate NAP information, business hours, website, and photos",
      icon: <Image className="w-6 h-6" />
    },
    {
      title: "Optimize Your Listing",
      description: "Write a compelling description, select categories, and add attributes",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Keep Information Updated",
      description: "Regularly update hours, respond to reviews, and post updates",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const napInfo = `
Business Name: ${businessInfo.name}
Address: ${businessInfo.address.streetAddress}, ${businessInfo.address.addressLocality}, ${businessInfo.address.addressRegion} ${businessInfo.address.postalCode}
Phone: ${businessInfo.contact.phone}
Website: ${businessInfo.contact.website}
  `.trim();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl">
          <MapPin className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Google Business Profile Setup Guide
        </h2>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-gray-700 leading-relaxed">
          Setting up your Google Business Profile is crucial for local SEO success. Follow these steps
          to ensure your business appears in Google Maps and local search results.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                <div className="text-blue-600 flex-shrink-0">
                  {step.icon}
                </div>
              </div>
              {step.link && (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Get Started <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
        <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Your NAP Information (Copy This)
        </h3>
        <pre className="bg-white rounded-lg p-4 text-sm text-gray-700 overflow-x-auto border border-gray-200 font-mono whitespace-pre-wrap">
          {napInfo}
        </pre>
        <p className="text-sm text-gray-600 mt-4">
          Use this exact information across all online directories and citations to maintain NAP consistency.
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Best Practices</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Respond to all reviews within 24-48 hours</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Upload high-quality photos regularly</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Post updates and announcements weekly</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Add relevant business attributes</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Keep business hours accurate</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Categories to Use</h3>
          <div className="space-y-2">
            <div className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
              Educational Institution
            </div>
            <div className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
              Educational Service
            </div>
            <div className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
              Tutoring Service
            </div>
            <div className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
              Preschool
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <strong>Pro Tip:</strong> Consistent NAP information across your website, Google Business Profile,
          and other directories significantly improves local search rankings.
        </p>
      </div>
    </div>
  );
}

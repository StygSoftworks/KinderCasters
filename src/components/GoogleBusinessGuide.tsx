import { CheckCircle, Mail, Globe } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

export default function GoogleBusinessGuide() {
  const contactInfo = `
Business Name: ${businessInfo.name}
Type: Online Business
Email: ${businessInfo.contact.email}
Website: ${businessInfo.contact.website}
  `.trim();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
          <Globe className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Contact Information
        </h2>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-gray-700 leading-relaxed">
          {businessInfo.name} is a fully online business providing educational resources worldwide.
          Get in touch with us using the contact information below.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
        <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Business Information
        </h3>
        <pre className="bg-white rounded-lg p-4 text-sm text-gray-700 overflow-x-auto border border-gray-200 font-mono whitespace-pre-wrap">
          {contactInfo}
        </pre>
        <div className="mt-4 flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
          <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <a
            href={`mailto:${businessInfo.contact.email}`}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {businessInfo.contact.email}
          </a>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
          <h3 className="font-bold text-lg text-gray-800 mb-3">What We Offer</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {businessInfo.services.map((service, index) => (
              <li key={index} className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Business Type</h3>
          <div className="space-y-2">
            <div className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
              Online Educational Platform
            </div>
            <div className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
              Early Childhood Education
            </div>
            <div className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
              Digital Learning Resources
            </div>
            <div className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
              Free Educational Content
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> We are a permanently online business with no physical location.
          All educational resources are accessible 24/7 through our website.
        </p>
      </div>
    </div>
  );
}

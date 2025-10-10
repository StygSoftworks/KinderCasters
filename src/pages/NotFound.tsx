import { Link } from 'react-router-dom';
import { Home, Sparkles, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 blur-3xl bg-purple-500 opacity-50 animate-pulse" />
            <AlertCircle className="relative w-32 h-32 text-purple-400 mx-auto" />
          </div>

          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            It looks like this page went on a magical adventure! Let's go back home.
          </p>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 mb-8">
            <div className="flex items-start gap-3 text-left">
              <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="text-gray-200">
                <p className="font-semibold mb-2">Fun Fact!</p>
                <p className="text-sm">
                  Even magical creatures sometimes get lost, but they always find their way back to their friends!
                  Let's help you find your way back too.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>

            <Link
              to="/portal"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white border-opacity-30 hover:bg-opacity-30 hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Go to Portal
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Error code: 404 - Page not found
          </p>
        </div>
      </div>
    </div>
  );
}

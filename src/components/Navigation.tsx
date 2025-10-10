import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Info, Wand2, Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsResourcesOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 hover:scale-105 transition-transform"
            aria-label="KinderCasters Home"
          >
            <Wand2 className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
            <span className="hidden xs:inline">KinderCasters</span>
            <span className="xs:hidden">KC</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              icon={<Home className="w-4 h-4" />}
              label="Home"
              isActive={isActive('/')}
            />

            <NavLink
              to="/portal"
              icon={<BookOpen className="w-4 h-4" />}
              label="Learning Portal"
              isActive={isActive('/portal') || isActive('/flashcards')}
            />

            <div className="relative group">
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive('/about') || isActive('/local-seo')
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-orange-600'
                }`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <Info className="w-4 h-4" />
                Resources
                <ChevronDown className="w-3 h-3" />
              </button>

              <div
                className={`absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                  isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <DropdownLink
                  to="/about"
                  icon={<Info className="w-4 h-4" />}
                  label="About Us"
                  description="Learn about our mission"
                />
                <DropdownLink
                  to="/local-seo"
                  icon={<MapPin className="w-4 h-4" />}
                  label="Local & Contact"
                  description="Find our information"
                />
              </div>
            </div>

            <a
              href="tel:+1-555-123-4567"
              className="flex items-center gap-2 ml-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call Us</span>
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          <div className="fixed top-16 left-0 right-0 bg-white shadow-2xl z-50 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              <MobileNavLink
                to="/"
                icon={<Home className="w-5 h-5" />}
                label="Home"
                isActive={isActive('/')}
                onClick={closeMobileMenu}
              />

              <MobileNavLink
                to="/portal"
                icon={<BookOpen className="w-5 h-5" />}
                label="Learning Portal"
                isActive={isActive('/portal') || isActive('/flashcards')}
                onClick={closeMobileMenu}
              />

              <div className="pt-3 pb-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                  Resources
                </div>
                <MobileNavLink
                  to="/about"
                  icon={<Info className="w-5 h-5" />}
                  label="About Us"
                  isActive={isActive('/about')}
                  onClick={closeMobileMenu}
                />
                <MobileNavLink
                  to="/local-seo"
                  icon={<MapPin className="w-5 h-5" />}
                  label="Local & Contact"
                  isActive={isActive('/local-seo')}
                  onClick={closeMobileMenu}
                />
              </div>

              <div className="pt-3 border-t border-gray-200">
                <a
                  href="tel:+1-555-123-4567"
                  className="flex items-center gap-3 px-3 py-3 text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:shadow-lg transition-all"
                  onClick={closeMobileMenu}
                >
                  <Phone className="w-5 h-5" />
                  Call Us: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

function NavLink({ to, icon, label, isActive }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        isActive
          ? 'bg-orange-100 text-orange-700'
          : 'text-gray-700 hover:bg-gray-100 hover:text-orange-600'
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

interface DropdownLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  description: string;
}

function DropdownLink({ to, icon, label, description }: DropdownLinkProps) {
  return (
    <Link
      to={to}
      className="flex items-start gap-3 px-4 py-3 hover:bg-orange-50 transition-colors"
    >
      <div className="text-orange-600 mt-0.5">{icon}</div>
      <div>
        <div className="font-semibold text-gray-800 text-sm">{label}</div>
        <div className="text-xs text-gray-600">{description}</div>
      </div>
    </Link>
  );
}

interface MobileNavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function MobileNavLink({ to, icon, label, isActive, onClick }: MobileNavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
        isActive
          ? 'bg-orange-100 text-orange-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

import { Link } from 'react-router-dom';
import { Home, Info, Star, Wand2 } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            <Wand2 className="w-7 h-7 text-orange-600" />
            KinderCasters
          </Link>
          <div className="flex gap-6">
            <NavLink to="/" icon={<Home className="w-4 h-4" />} label="Home" />
            <NavLink to="/portal" icon={<Star className="w-4 h-4" />} label="Portal" />
            <NavLink to="/about" icon={<Info className="w-4 h-4" />} label="About" />
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

function NavLink({ to, icon, label }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
}

import { Link } from 'react-router-dom';

interface PortalCardProps {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  gradient: string;
  to: string;
}

export default function PortalCard({ title, description, details, icon, gradient, to }: PortalCardProps) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-purple-400 block"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-500`} />

      <div className="relative p-8 text-white">
        <div className="flex justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>

        <h3 className="text-3xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-lg opacity-95 mb-2">
          {description}
        </p>

        <p className="text-sm opacity-80 mb-6">
          {details}
        </p>

        <div className="inline-block px-6 py-2 bg-white bg-opacity-30 rounded-full text-sm font-semibold backdrop-blur-sm">
          Start Learning →
        </div>
      </div>

      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
    </Link>
  );
}

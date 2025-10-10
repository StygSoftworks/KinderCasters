interface PageHeaderProps {
  icons?: React.ReactNode[];
  title: string;
  subtitle?: string;
  subtitleIcons?: React.ReactNode[];
  action?: React.ReactNode;
  titleGradient?: string;
}

export default function PageHeader({
  icons,
  title,
  subtitle,
  subtitleIcons,
  action,
  titleGradient = 'from-orange-600 via-red-600 to-rose-600'
}: PageHeaderProps) {
  return (
    <header className="text-center py-12 animate-fade-in">
      {icons && icons.length > 0 && (
        <div className="flex justify-center gap-3 mb-6">
          {icons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
      )}

      <h1 className={`text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${titleGradient} mb-4 drop-shadow-sm`}>
        {title}
      </h1>

      {subtitle && (
        <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 flex items-center justify-center gap-2">
          {subtitleIcons && subtitleIcons[0]}
          {subtitle}
          {subtitleIcons && subtitleIcons[1]}
        </p>
      )}

      {action && action}
    </header>
  );
}

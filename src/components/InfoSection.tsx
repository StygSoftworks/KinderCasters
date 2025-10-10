interface InfoSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  borderColor?: string;
}

export default function InfoSection({ icon, title, children, borderColor = 'border-blue-200' }: InfoSectionProps) {
  return (
    <section className={`bg-white rounded-2xl shadow-lg p-8 border-4 ${borderColor}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </section>
  );
}

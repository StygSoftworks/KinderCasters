interface VisuallyHiddenProps {
  children: React.ReactNode;
  focusable?: boolean;
}

export default function VisuallyHidden({ children, focusable = false }: VisuallyHiddenProps) {
  return (
    <span
      className={focusable ? 'sr-only-focusable' : 'sr-only'}
    >
      {children}
    </span>
  );
}

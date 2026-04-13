import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
  threshold?: number;
}

export default function RevealSection({
  children,
  className = '',
  animation = 'sr-reveal-up',
  delay = '',
  threshold,
}: RevealSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `${animation} ${delay}` : 'sr-hidden'}`}
    >
      {children}
    </div>
  );
}

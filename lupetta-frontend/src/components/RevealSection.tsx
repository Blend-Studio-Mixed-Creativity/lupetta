import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
  as?: React.ElementType;
  threshold?: number;
}

export default function RevealSection({
  children,
  className = '',
  animation = 'sr-reveal-up',
  delay = '',
  as: Tag = 'div',
  threshold,
}: RevealSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });
  return (
    <Tag
      ref={ref}
      className={`${className} ${isVisible ? `${animation} ${delay}` : 'sr-hidden'}`}
    >
      {children}
    </Tag>
  );
}

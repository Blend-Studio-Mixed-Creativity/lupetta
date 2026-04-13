import { use3DTilt } from '../../hooks/use3DTilt';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxAngle?: number;
  onClick?: () => void;
}

export default function TiltCard3D({
  children,
  className = '',
  style: extraStyle,
  maxAngle = 12,
  onClick,
}: TiltCard3DProps) {
  const { ref, tiltStyle, glare, onMouseMove, onMouseLeave } = use3DTilt(maxAngle);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ ...extraStyle, ...tiltStyle, willChange: 'transform' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Glare */}
      <div
        className="absolute inset-0 pointer-events-none z-20 rounded-[inherit]"
        style={{
          opacity: glare.opacity,
          transition: 'opacity 0.35s ease',
          background: `radial-gradient(ellipse at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.55) 0%, transparent 62%)`,
        }}
      />
      {children}
    </div>
  );
}

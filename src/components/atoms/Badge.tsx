interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'green' | 'red' | 'yellow';
  className?: string;
}

const Badge = ({ children, color = 'blue', className = '' }: BadgeProps) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span className={`rounded-full !p-2 text-sm font-medium ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

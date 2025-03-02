import Image from 'next/image';

interface AvatarProps {
  src?: string;
  fallbackText?: string;
  className?: string;
}

const Avatar = ({ src, fallbackText, className = '' }: AvatarProps) => {
  if (!src && !fallbackText) {
    return null;
  }

  if (!src) {
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-gray-200 text-gray-600 ${className}`}
      >
        <span className="text-sm">{fallbackText?.[0] || 'M'}</span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-full ${className}`}>
      <Image src={src} alt="آواتار" width={40} height={40} className="object-cover" />
    </div>
  );
};

export default Avatar;

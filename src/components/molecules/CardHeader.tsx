import React from 'react';
import Avatar from '@/components/atoms/Avatar';

interface CardHeaderProps {
  title?: string;
  avatar?: string;
  managerName?: string;
  badge?: React.ReactNode;
}

const CardHeader = ({ title = 'بدون عنوان', avatar, managerName, badge }: CardHeaderProps) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="shrink-0">
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {managerName && (
          <div className="flex flex-row items-center justify-start gap-2">
            <Avatar src={avatar} fallbackText={title?.[0] || 'M'} className="h-10 w-10" />
            <span className="line-clamp-1 text-sm text-gray-500">{managerName}</span>
          </div>
        )}
      </div>

      {badge && <div className="shrink-0">{badge}</div>}
    </div>
  );
};

export default CardHeader;

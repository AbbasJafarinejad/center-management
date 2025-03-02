import { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMapPin, HiPhone } from 'react-icons/hi2';
import CardHeader from '@/components/molecules/CardHeader';
import CardBody from '@/components/molecules/CardBody';
import Badge from '@/components/atoms/Badge';
import { Center } from '@/types/Center';

interface CenterCardProps {
  center: Center;
}

const CenterCard = forwardRef<HTMLDivElement, CenterCardProps>(({ center }, ref) => {
  const managerAvatar = center.manager?.avatar?.find((img) => img.mode === 'medium')?.url;
  const centerLogo = center.detail?.avatar?.find((img) => img.mode === 'medium')?.url;

  return (
    <div
      ref={ref}
      className="group flex w-full max-w-xs flex-col rounded-lg border border-gray-700 bg-white shadow-sm transition-all duration-200 hover:border-black hover:shadow-md md:max-w-sm lg:max-w-md"
    >
      <div className="flex h-40 w-full items-center justify-center bg-gray-50">
        {centerLogo ? (
          <Image
            src={centerLogo}
            alt={center.detail?.title || 'لوگوی مرکز'}
            width={120}
            height={120}
            className="object-contain object-center"
            quality={85}
          />
        ) : (
          <div className="text-sm text-gray-400">بدون تصویر</div>
        )}
      </div>

      <div className="flex flex-col gap-3 !p-4">
        <CardHeader
          title={center.detail?.title || 'بدون عنوان'}
          avatar={managerAvatar}
          managerName={center.manager?.name}
          badge={
            <Badge
              className={`rounded-lg px-2 py-1 text-xs ${
                center.status === 'active'
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-gray-100 text-gray-600' 
              }`}
            >
              {center.status === 'active' ? 'فعال' : 'غیرفعال'}
            </Badge>
          }
        />
        <div className="flex items-center gap-4">
          <CardBody>
            <div className="mt-4 flex flex-col gap-4">
              {center.detail?.address && (
                <div className="flex flex-row items-center gap-2 text-sm text-gray-700">
                  <HiMapPin width={16} className="flex-shrink-0 text-gray-500" />
                  <span className="break-words">{center.detail.address}</span>
                </div>
              )}

              {center.detail?.phone_numbers?.[0] && (
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <HiPhone width={16} className="flex-shrink-0 text-gray-500" />
                  <Link
                    href={`tel:${center.detail.phone_numbers[0]}`}
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    {center.detail.phone_numbers[0]}
                  </Link>
                </div>
              )}
              {center.detail?.description && (
                <p className="line-clamp-3 text-sm leading-5 text-gray-600">
                  {center.detail.description}
                </p>
              )}
            </div>
          </CardBody>
        </div>
      </div>
    </div>
  );
});

CenterCard.displayName = 'CenterCard';

export default CenterCard;

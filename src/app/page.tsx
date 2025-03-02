import CenterList from '@/components/templates/CenterList';
import centersData from '@/data/centers.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'لیست مراکز روان‌شناسی - مرکز جامع مشاوره',
  description: 'فهرست کامل مراکز روان‌شناسی و مشاوره در سراسر ایران',
  keywords: ['روان‌شناسی', 'مشاوره', 'مراکز مشاوره', 'سلامت روان'],
};

export default function Home() {
  const initialCenters = centersData.slice(0, 10);
  const totalCenters = centersData;

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="!p-8 text-center !text-3xl !font-bold text-gray-900">
        مراکز روان‌شناسی و مشاوره
      </h1>
      <div>
        <CenterList initialCenters={initialCenters} totalCenters={totalCenters} />
      </div>
    </div>
  );
}

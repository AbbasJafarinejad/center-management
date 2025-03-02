'use client';

import { Center } from '@/types/Center';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import CenterCard from '@/components/organisms/CenterCard';

interface CenterListProps {
  initialCenters: Center[];
  totalCenters: Center[];
}

const CenterList = ({ initialCenters, totalCenters }: CenterListProps) => {
  const [displayedCenters, setDisplayedCenters] = useState<Center[]>(initialCenters);
  const [page, setPage] = useState(1);
  const hasMore = displayedCenters.length < totalCenters.length;

  const loadMore = () => {
    const nextPage = page + 1;
    const startIndex = nextPage * 10 - 10;
    const endIndex = startIndex + 10;
    const newCenters = totalCenters.slice(startIndex, endIndex);

    if (newCenters.length > 0) {
      setDisplayedCenters((prev) => [...prev, ...newCenters]);
      setPage(nextPage);
    }
  };

  const { containerRef, isFetching, setLastItemRef } = useInfiniteScroll({
    loadMore,
    hasMore,
    threshold: 200,
    itemsPerPage: 10,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div ref={containerRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedCenters.map((center, index) => (
          <CenterCard
            key={center.id}
            center={center}
            ref={index === displayedCenters.length - 1 ? setLastItemRef : undefined}
          />
        ))}
      </div>
      {isFetching && hasMore && (
        <div className="my-8 flex items-center justify-center">
          <FaSpinner className="animate-spin text-2xl text-blue-500" />
        </div>
      )}
      {!hasMore && displayedCenters.length > 0 && (
        <div className="!my-16 text-center text-lg text-gray-500">تمام مراکز نمایش داده شدند</div>
      )}
    </div>
  );    
};

export default CenterList;

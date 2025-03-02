import { useEffect, useRef, useState } from 'react';

interface UseInfiniteScrollProps {
  loadMore: () => void;
  hasMore: boolean;
  threshold?: number;
  itemsPerPage?: number;
}

const useInfiniteScroll = ({
  loadMore,
  hasMore,
  threshold = 200,
  itemsPerPage = 10,
}: UseInfiniteScrollProps) => {
  const [isFetching, setIsFetching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<Element | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !hasMore) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching) {
        setIsFetching(true);
        loadMore();
      }
    };

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: `0px 0px ${threshold}px 0px`,
      threshold: 0.1,
    });

    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [hasMore, isFetching, loadMore, threshold]);

  const setLastItemRef = (element: Element | null) => {
    lastItemRef.current = element;
  };

  useEffect(() => {
    if (isFetching) {
      setIsFetching(false);
    }
  }, [isFetching]);

  return { containerRef, isFetching, setLastItemRef };
};

export default useInfiniteScroll;

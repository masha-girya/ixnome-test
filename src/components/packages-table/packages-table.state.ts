import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from 'store';

export const usePackagesTable = () => {
  const elementScroll = useRef<HTMLDivElement | null>(null);
  const [isOnAdd, setIsOnAdd] = useState(false);
  const { packages, packagesOnShow } = useAppSelector(state => state.packages);

  const handleOpenAdd = () => {
    setIsOnAdd(!isOnAdd);
  };

  useEffect(() => {
    if (packages.length === 0 && elementScroll.current) {
      elementScroll.current.scrollLeft += 500;
    }
  }, []);

  return {
    isOnAdd, packages, packagesOnShow, elementScroll, handleOpenAdd,
  };
};

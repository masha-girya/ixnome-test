import { useEffect, useState } from 'react';
import { useAppSelector } from 'store';

export const usePackagesTable = () => {
  const [isOnAdd, setIsOnAdd] = useState(false);
  const { packages, packagesOnShow } = useAppSelector(state => state.packages);

  const handleOpenAdd = () => {
    setIsOnAdd(!isOnAdd);
  };

  useEffect(() => {
    const elementScroll = document.getElementById('scroll');

    if (packages.length === 0 && elementScroll) {
      elementScroll.scrollLeft += 500;
    }
  }, []);

  return {
    isOnAdd, packages, packagesOnShow, handleOpenAdd,
  };
};

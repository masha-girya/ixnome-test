import { useState } from 'react';
import { useAppSelector } from 'store';

export const usePackagesTable = () => {
  const [isOnAdd, setIsOnAdd] = useState(false);
  const { packages, packagesOnShow } = useAppSelector(state => state.packages);

  const handleOpenAdd = () => {
    setIsOnAdd(!isOnAdd);
  };

  return {
    isOnAdd, packages, packagesOnShow, handleOpenAdd,
  };
};

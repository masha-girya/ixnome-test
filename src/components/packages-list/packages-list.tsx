import React from 'react';
import { PackagesTable } from 'components/packages-table';
import { useAppSelector } from 'store';
import './packages-list.scss';

export const PackagesList = () => {
  const { packages } = useAppSelector(state => state.packages);

  return (
    <div className="packages-list">
      <div className="packages-list__info">
        <h2 className="packages-list__title">Packages</h2>
        <p className="packages-list__amount">{`${packages.length} entries`}</p>
      </div>

      <PackagesTable />
    </div>
  );
};

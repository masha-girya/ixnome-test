import React from 'react';
import { PackageItem } from 'components/package-item';
import { AddPackage } from 'components/add-package';
import { TABLE_CONSTANTS } from 'app-constants';
import { normalizeTd } from 'utils/helpers';
import { usePackagesTable } from './packages-table.state';
import './packages-table.scss';

export const PackagesTable = () => {
  const {
    isOnAdd, packages, packagesOnShow, elementScroll, handleOpenAdd,
  } = usePackagesTable();

  return (
    <>
      <div className="packages-table" ref={elementScroll}>
        <table className="packages-table__container">
          <thead>
            <tr className="packages-table__head-row">
              {TABLE_CONSTANTS.map(tableTitle => (
                tableTitle === 'status'
                  ? (
                    <th key={tableTitle} className="packages-table__status">
                      Status

                      <button
                        type="button"
                        className="packages-table__add-button"
                        onClick={handleOpenAdd}
                      >
                        +
                      </button>
                    </th>
                  )
                  : <th key={tableTitle}>{normalizeTd(tableTitle)}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {packages.length > 0 && packagesOnShow.map(packageItem => (
              <PackageItem key={packageItem.id} packageItem={packageItem} />
            ))}
          </tbody>
        </table>
      </div>

      {isOnAdd && <AddPackage />}
    </>
  );
};

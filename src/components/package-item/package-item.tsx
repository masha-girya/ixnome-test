import React from 'react';
import { IPackage } from 'types';
import './package-item.scss';

interface IProps {
  packageItem: IPackage,
}

export const PackageItem = ({ packageItem }: IProps) => {
  const {
    id,
    client,
    pickupAddress,
    dropoffAddress,
    courier,
    status,
  } = packageItem;

  return (
    <tr className="package-item">
      <td>{`#${id}`}</td>
      <td>{client}</td>
      <td>{pickupAddress}</td>
      <td>{dropoffAddress}</td>
      <td>{courier}</td>
      <td>
        <div className="package-item__status">
          {status}
        </div>
      </td>
    </tr>
  );
};

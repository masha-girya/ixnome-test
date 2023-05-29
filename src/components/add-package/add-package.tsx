/* eslint-disable no-console */
import React from 'react';
import { normalizeTd } from 'utils/helpers';
import { initialValues } from 'app-constants';
import { useAddPackage } from './add-package.state';
import './add-package.scss';

export const AddPackage = () => {
  const {
    addValues, isError, handleChange, handleAdd,
  } = useAddPackage();

  return (
    <>
      <table className="add-package">
        <thead>
          <tr className="add-package__row">
            {Object.keys(initialValues).map(tableToAdd => {
              const handleChangeValue = (
                event: React.ChangeEvent<HTMLInputElement>,
              ) => (
                handleChange(event, tableToAdd));

              return (
                tableToAdd === 'status'
                  ? (
                    <th className="add-package__add-item" key={tableToAdd}>
                      <button
                        type="button"
                        className="add-package__button"
                        onClick={handleAdd}
                      >
                        Add
                      </button>
                    </th>
                  )
                  : (
                    <th key={tableToAdd}>
                      <input
                        type="text"
                        placeholder={normalizeTd(tableToAdd)}
                        className="add-package__input"
                        value={addValues[tableToAdd as keyof typeof addValues]}
                        onChange={handleChangeValue}
                      />
                    </th>
                  )
              );
            })}
          </tr>
        </thead>
      </table>

      {isError && <p className="add-package__error">ID is already exists</p>}
    </>
  );
};

/* eslint-disable no-console */
import { useCallback, useEffect, useState } from 'react';
import { initialValues } from 'app-constants';
import { useAppDispatch, useAppSelector } from 'store';
import { packagesActions } from 'store/features/packages.slice';

export const useAddPackage = () => {
  const dispatch = useAppDispatch();
  const { packages } = useAppSelector(state => state.packages);
  const [addValues, setAddValues] = useState(initialValues);
  const [isError, setIsError] = useState(false);

  const handleAdd = useCallback(() => {
    if (packages.find(pack => pack.id === addValues.id)) {
      setIsError(true);

      return;
    }

    dispatch(packagesActions.addPackage({ ...addValues, status: 'online' }));
    setAddValues(initialValues);
  }, [addValues]);

  const handleChange = useCallback((
    event: React.ChangeEvent<HTMLInputElement>,
    itemName: string,
  ) => {
    const { value } = event.target;

    setAddValues(prev => ({ ...prev, [itemName]: value }));
  }, []);

  useEffect(() => {
    setIsError(false);
  }, [addValues.id]);

  return {
    addValues, isError, handleChange, handleAdd,
  };
};

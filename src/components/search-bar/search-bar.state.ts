import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'store';
import { packagesActions } from 'store/features/packages.slice';

export const useSearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const handleChangeQuery = useCallback((
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setQuery(event.target.value);
  }, []);

  useEffect(() => {
    dispatch(packagesActions.setByQuery(query));
  }, [query]);

  return { query, handleChangeQuery };
};

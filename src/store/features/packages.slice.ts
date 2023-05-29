/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPackage } from 'types';
import { getLocalItem, setLocalItem } from 'utils/helpers';
import { STORAGE_CONSTANTS as STORAGE } from 'app-constants';

interface IInitialState {
  packages: IPackage[],
  packagesOnShow: IPackage[],
}

const initialPackages = getLocalItem(STORAGE.PACKAGES) || [];

const initialState: IInitialState = {
  packages: initialPackages,
  packagesOnShow: initialPackages,
};

export const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    addPackage: (state, action: PayloadAction<IPackage>) => {
      setLocalItem(
        STORAGE.PACKAGES,
        JSON.stringify([...state.packages, action.payload]),
      );

      state.packages = [...state.packages, action.payload];
      state.packagesOnShow = [...state.packagesOnShow, action.payload];
    },
    setByQuery: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();

      state.packagesOnShow = state.packages.filter(pack => (
        pack.client.toLowerCase().includes(query)
        || pack.pickupAddress.toLowerCase().includes(query)));
    },
  },
});

export const packagesActions = packagesSlice.actions;

export default packagesSlice.reducer;

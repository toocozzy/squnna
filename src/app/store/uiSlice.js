import { createSlice } from "@reduxjs/toolkit";

export const defaultNumberOfTopCoins = window.innerWidth > 991 ? 18 : 6;

const initialState = {
  numberOfTopCoins: defaultNumberOfTopCoins,
  isCoinsListExtended: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCoinsRanking(state) {
      if (state.numberOfTopCoins === defaultNumberOfTopCoins) {
        state.numberOfTopCoins = 50;
        state.isCoinsListExtended = true;
      } else {
        state.numberOfTopCoins = defaultNumberOfTopCoins;
        state.isCoinsListExtended = false;
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

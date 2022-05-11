import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../../services/cryptoApi";

import uiSlice from "./uiSlice";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    ui: uiSlice.reducer,
  },
});

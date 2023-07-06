import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { resetSystem, sysmtemSlice, themeSwitch } from "./Slice/System";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  PeopleAPI,
  useGetAllPeopleDataQuery,
  useGetOnePersonDataQuery,
} from "./API/PeopleAPI";
import {
  SpeciesAPI,
  useGetAllSpeciesDataQuery,
  useGetOneSpeciesDataQuery,
} from "./API/SpeciesAPI";
import {
  StarShipAPI,
  useGetAllStarShipDataQuery,
  useGetOneStarShipDataQuery,
} from "./API/StarShipAPI";

const persistedSystemReducer = persistReducer(
  {
    key: "system Settings",
    storage,
  },
  sysmtemSlice.reducer
);

export const store = configureStore({
  reducer: {
    system: persistedSystemReducer,
    [PeopleAPI.reducerPath]: PeopleAPI.reducer,
    [SpeciesAPI.reducerPath]: SpeciesAPI.reducer,
    [StarShipAPI.reducerPath]: StarShipAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      PeopleAPI.middleware,
      SpeciesAPI.middleware,
      StarShipAPI.middleware
    ),
  // devTools: process.env.NODE_ENV !== "production",
  devTools: false,
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export {
  // system actions
  resetSystem,
  themeSwitch,

  // People API
  useGetAllPeopleDataQuery,
  useGetOnePersonDataQuery,

  // Species API
  useGetAllSpeciesDataQuery,
  useGetOneSpeciesDataQuery,

  // StarShip API
  useGetAllStarShipDataQuery,
  useGetOneStarShipDataQuery,
};

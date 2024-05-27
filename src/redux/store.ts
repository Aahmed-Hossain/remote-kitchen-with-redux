import { configureStore } from "@reduxjs/toolkit";
// import {  persistReducer, persistStore } from 'redux-persist'
// import storage from "redux-persist/lib/storage";
import foodReducers from "./foodReducers";

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, foodReducers);
export const store = configureStore({
  reducer: {
    foodItems: foodReducers,
  },
});

// export const persistor = persistStore(store);
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

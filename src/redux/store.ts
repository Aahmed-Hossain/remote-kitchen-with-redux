import { configureStore } from "@reduxjs/toolkit";
// import { persistStore } from 'redux-persist'
// import storage from "redux-persist/lib/storage";
import foodReducers from "./foodReducers";

// const persistConfig = {
//   key: "root",
//   storage,
// };
export const store = configureStore({
  reducer: {
    foodItems: foodReducers,
  },
});
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// export const persistor = persistStore(store)

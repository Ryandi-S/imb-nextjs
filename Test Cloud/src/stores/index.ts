import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

/**
 * Configuration for persisting user data
 * @returns The configuration for persisting user data
 */
const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["user"],
};

/**
 * Create a persisted reducer for user data
 * @returns The persisted reducer for user data
 */
const persistedUsersReducer = persistReducer(usersPersistConfig, usersReducer);

/**
 * Configure the Redux store with the reducers and middleware
 * @returns The Redux store
 */
export const store = configureStore({
  reducer: {
    users: persistedUsersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/**
 * Create a persistor for the Redux store
 * @returns The persistor for the Redux store
 */
export const persistor = persistStore(store);

/**
 * Define the types for the Redux store state and dispatch
 * @returns The types for the Redux store state and dispatch
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

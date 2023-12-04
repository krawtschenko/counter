import { combineReducers } from "redux";
import { inputReducer } from "../reducers/input/inputReducer";
import { countReducer } from "../reducers/count/countReducer";
import { modeReducer } from "../reducers/mode/modeReducer";
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
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  input: inputReducer,
  count: countReducer,
  mode: modeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type TAppRootState = ReturnType<typeof rootReducer>;

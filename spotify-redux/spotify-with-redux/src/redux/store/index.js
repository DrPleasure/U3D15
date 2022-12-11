import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import localStorage from "redux-persist/lib/storage";
import songsReducer from "../reducers/songsReducer";

//ADD FAVORITES REDUCER LATER TO bigReducer

const bigReducer = combineReducers({  songsResult: songsReducer });

const persistConfig = {
  key: `root`,
  storage: localStorage,
  transforms: [encryptTransform({ secretKey: process.env.REACT_APP_PRIVACY_KEY })],
};

const peristedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({ reducer: peristedReducer });

export const persistor = persistStore(store);

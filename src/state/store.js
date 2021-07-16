import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import SwipeCounterSlice from "./swipeCounter";
import PickupLinesSlice from "./pickupLines";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ['SwipeCounter', 'PickupLines']
  // blacklist: ["SwipeCounter", "PickupLines"]
};

const reducers = combineReducers({
  SwipeCounter: SwipeCounterSlice,
  PickupLines: PickupLinesSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);

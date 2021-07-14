import { AppRegistry } from "react-native";
import App from "./App";
import React from 'react';
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import {store, persistor} from "./src/state/store";

const Wraped = () => (
  <Provider store={store} persistor={persistor}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Wraped);

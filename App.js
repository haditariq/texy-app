import React from "react";
import { View } from "react-native";
import Navigation from "./src/navigation";
import { STORAGE_KEY } from "./src/config/values";
import { useSelector, useDispatch } from "react-redux";
import {
  initializeSwiperCount,
  subscribe,
  unSubscribe
} from "./src/state/swipeCounter";
import Purchases from "react-native-purchases";

const App = () => {
  const dispatch = useDispatch();
  const { count, isSubscribed, recentlySwiped } = useSelector(
    (state) => state.SwipeCounter
  );

  React.useEffect(() => {
    // Purchases.setDebugLogsEnabled(true);
    Purchases.setup("dSWzrIFIVTFphFZVoJaZqjeDKRijNNcF");
    restorePurchase()
      .then((isRestore) => {
        if (isRestore) dispatch(subscribe());
        else {
          dispatch(unSubscribe());
        }
      })
      .catch((err) => {
        console.error("Restore Catch", err.message);
      });
  }, []);

  const restorePurchase = async () => {
    try {
      const restore = await Purchases.restoreTransactions();
      return restore.entitlements.active["texy.premium"].isActive;
    } catch (e) {
      return false;
    }
  };

  return <Navigation />;
};

export default App;

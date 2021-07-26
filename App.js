import React from "react";
import { View } from "react-native";
import Navigation from "./src/navigation";
import { STORAGE_KEY } from "./src/config/values";
import { useSelector, useDispatch } from "react-redux";
import { initializeSwiperCount, subscribe, unSubscribe } from "./src/state/swipeCounter";
import Purchases from "react-native-purchases";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const dispatch = useDispatch();
  const { count, isSubscribed } = useSelector((state) => state.SwipeCounter);
  // const pick = useSelector((state) => state.PickupLines.PickupLines);

  React.useEffect(() => {
    Purchases.setDebugLogsEnabled(true);
    Purchases.setup("dSWzrIFIVTFphFZVoJaZqjeDKRijNNcF", "sandRequest");
    restorePurchase()
      .then((isRestore) => {
        dispatch(unSubscribe());
        if (isRestore.length) {
          dispatch(subscribe());
        } else if (!isSubscribed && count === 0) {
          dispatch(initializeSwiperCount());
        } else {
          console.warn("else");
        }
      })
      .catch((err) => {
        console.error("Restore Catch", err.message);
        alert("Something went wrong. Please try later.");
      });
  }, []);

  const restorePurchase = async () => {
    try {
      const restore = await Purchases.restoreTransactions();
      console.warn(restore.activeSubscriptions);
      return restore.activeSubscriptions;
    } catch (e) {
      alert("Something went wrong. Please try later.");
      return [];
    }
  };

  // return <View />;
  return <Navigation />;
};

export default App;

import React from "react";
import { View } from "react-native";
import Navigation from "./src/navigation";
import { STORAGE_KEY } from "./src/config/values";
import { useSelector, useDispatch } from "react-redux";
import { initializeSwiperCount, subscribe } from "./src/state/swipeCounter";
import Purchases from "react-native-purchases";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const dispatch = useDispatch();
  const { count, isSubscribed } = useSelector((state) => state.SwipeCounter);
  const pick = useSelector((state) => state.PickupLines.PickupLines);

  React.useEffect(() => {
    // Purchases.setDebugLogsEnabled(true);
    Purchases.setup("dSWzrIFIVTFphFZVoJaZqjeDKRijNNcF", "sandRequest");
    getProducts();

    const isRestore = false;
    if (isRestore) {
      dispatch(subscribe());
    } else if (!isSubscribed && count === 0) {
      dispatch(initializeSwiperCount());
    } else {
      console.warn("else");
    }
  }, []);
 
  const getProducts = async () => {
    try {
      const offerings = await Purchases.getOfferings();
      console.warn(offerings)
      if (
        offerings.current !== null &&
        offerings.current.availablePackages.length !== 0
      ) {
        // Display packages for sale
      }
    } catch (e) { console.error(e);}
  };

  return <View />;
  return <Navigation />;
};

export default App;

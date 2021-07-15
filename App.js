import React from "react";
import Navigation from "./src/navigation";
import { STORAGE_KEY } from "./src/config/values";
import { useSelector, useDispatch } from "react-redux";
import { initializeSwiperCount } from "./src/state/swipeCounter";

const App = () => {
  const count = useSelector((state) => state.SwipeCounter.count);
  const pick = useSelector((state) => state.PickupLines.PickupLines);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (count == 0) {
      dispatch(initializeSwiperCount());
    } else if (count > 49) {
      // restore IAP
    }
  }, []);

  return <Navigation />;
};

export default App;

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import Header from "../components/common/Header";
import { MAX_SWIPES, STORAGE_KEY } from "../config/values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import Swiper from "react-native-deck-swiper";
import { incrementSwipeCount } from "../state/swipeCounter";
import { addPickupLine } from "../state/pickupLines";
import Copy from "../components/copy";
import pickupLinesDataSet from "../data/pickuplinesData.json";
import SwipeCard from "../components/SwipeCard";
import { wp } from "../utils/responsive";
import NoMorePickUps from '../screens/NoMorePickups'

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.SwipeCounter.count);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    checkSwipeLimit();
  }, []);

  const onSwipe = () => {
    dispatch(incrementSwipeCount());
    checkSwipeLimit();
    giveRandomNumber();
  };

  const giveRandomNumber = () => {
    //  setRandomNumber(Math.floor(Math.random() * pickupLinesDataSet.length));
    setRandomNumber(randomNumber + 1);
  };

  const checkSwipeLimit = () => {
    if (MAX_SWIPES <= parseInt(count)) props.navigation.navigate("PayWall");
  };

  const onRightSaveSwipe = () => {
    onSwipe();
    dispatch(addPickupLine(pickupLinesDataSet[randomNumber]));
  };

  if(true){
    return <NoMorePickUps/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.swipeContainer}>
          <Swiper
            cards={pickupLinesDataSet}
            renderCard={(card, index) => (
              <SwipeCard
                card={card}
                MAX_SWIPES={MAX_SWIPES}
                totalPickups={pickupLinesDataSet.length}
                count={count}
                idx={index}
              />
            )}
            onSwiped={(cardIndex) => {
              onSwipe();
              console.log(cardIndex);
            }}
            onSwipedRight={() => onRightSaveSwipe()}
            onSwipedAll={() => {
              console.log("onSwipedAll");
            }}
            cardIndex={0}
            childrenOnTop={true}
            backgroundColor={"transparent"}
            stackSize={3}
            disableTopSwipe={true}
            disableBottomSwipe={true}
          />
        </View>

        <View style={styles.swipeButtonContainer}>
          <TouchableOpacity onPress={onSwipe}>
            <Image
              style={styles.image}
              source={require("../assets/cross.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onRightSaveSwipe}>
            <Image
              style={styles.image}
              source={require("../assets/star.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    flexDirection: "column",
    padding: 10
  },
  swipeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  swipeButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  image: {
    height: wp(20),
    width: wp(20),
    resizeMode: "contain",
    marginHorizontal: 20,
  }
};

export default Dashboard;

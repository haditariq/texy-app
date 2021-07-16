import React, { useEffect, useState, useRef } from "react";
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
import NoMorePickUps from '../screens/NoMorePickups';
import { StackActions } from '@react-navigation/native';


const Dashboard = (props) => {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const count = useSelector((state) => state.SwipeCounter.count);
  const [randomNumber, setRandomNumber] = useState(0);
  const [onSwipedAll, setOnSwipedAll] = useState(false);

  useEffect(() => {
    checkSwipeLimit();
  }, []);

  const onSwipe = () => {
    dispatch(incrementSwipeCount());
    checkSwipeLimit();
    giveRandomNumber();
  };

  const giveRandomNumber = () => {
    setRandomNumber(randomNumber + 1);
  };

  const checkSwipeLimit = () => {
    if (MAX_SWIPES <= parseInt(count)){ 
        props.navigation.dispatch(
        StackActions.replace('PayWall')
      );
    }
  };

  const savePickupLine = () => {
    let unique_id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    console.warn({unique_id})
    pickupLinesDataSet[randomNumber].id = unique_id;
    dispatch(addPickupLine(pickupLinesDataSet[randomNumber]));
  }

  const onSwipeRight = () => {
    swiperRef.current.swipeRight();
  };

  const onSwipeLeft = () => {
    swiperRef.current.swipeLeft();
  }

  if(onSwipedAll){
    return <NoMorePickUps/>
  }
   
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.swipeContainer}>
          <Swiper
            ref={swiperRef}
            // cards={pickupLinesDataSet.slice(0,20)}
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
            onSwiped={onSwipe}
            onSwipedRight={savePickupLine}
            onSwipedAll={() => setOnSwipedAll(true)}
            cardIndex={0}
            childrenOnTop={true}
            backgroundColor={"transparent"}
            stackSize={3}
            disableTopSwipe={true}
            disableBottomSwipe={true}
          />
        </View>

        <View style={styles.swipeButtonContainer}>
          <TouchableOpacity onPress={onSwipeLeft}>
            <Image
              style={styles.image}
              source={require("../assets/cross.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSwipeRight}>
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

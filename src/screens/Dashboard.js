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
import { useSelector, useDispatch } from 'react-redux'
import {incrementSwipeCount} from '../state/swipeCounter'
import {addPickupLine} from '../state/pickupLines';
import Copy from '../components/copy'
import pickupLinesDataSet from '../data/pickuplinesData.json';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [currentSwipedCount, setCurrentSwipedCount] = useState(0);
  const count = useSelector((state) => state.SwipeCounter.count);
  let randomNumber = pickupLinesDataSet[Math.floor(Math.random() * pickupLinesDataSet.length)];
  const onSwipe = () => {
    dispatch(incrementSwipeCount());
  };

  const rightSaveSwipe = () => {
    onSwipe();
    dispatch(addPickupLine(pickupLinesDataSet[1]));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.swipeContainer}>
          <Text>Already Swiped: {count}</Text>
          <Text>Total Swipes Available: {MAX_SWIPES}</Text>
          
          <Text
            style={{color:'#fff', width: '70%', textAlign:'center', marginTop: 20}}
          >{randomNumber.Topic}</Text>
               <Text
            style={{color:'#fff', width: '70%', textAlign:'center', margin: 5}}
          >{randomNumber.Question}</Text>
        <Copy/>
        </View>
        <View style={styles.swipeButtonContainer}>
          <TouchableOpacity onPress={onSwipe}>
            <Image
              style={styles.image}
              source={require("../assets/cross.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={rightSaveSwipe}>
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
    alignItems: "center",
    backgroundColor: "#FF6F87"
  },
  swipeButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  image: {
    height: 90,
    width: 90,
    resizeMode: "cover",
    marginHorizontal: 10
  }
};

export default Dashboard;

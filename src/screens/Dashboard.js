import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import Header from "../components/common/Header";

const onSwipeLeft = () => alert("Swiped Left");
const onSwipeRight = () => alert("Swiped Right");

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.swipeContainer}>
          <Text>swipe coming soon</Text>
        </View>
        <View style={styles.swipeButtonContainer}>
          <TouchableOpacity onPress={() => onSwipeLeft()}>
            <Image
              style={styles.image}
              source={require("../assets/cross.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSwipeRight()}>
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

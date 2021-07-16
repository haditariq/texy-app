import React from "react";
import { SafeAreaView, View, Text, Image, Dimensions } from "react-native";
import Header from "../components/common/Header";
import { wp } from "../utils/responsive";
const { width } = Dimensions.get("window");

const NoMorePickUps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

        <View style={styles.content}>
        <View style={styles.bgContainer}>
          <Image
            style={styles.bg}
            source={require("../assets/finished-lines-bg.png")}
          />
          <Text style={[styles.text, {fontSize: wp(5.1),fontFamily: 'Khula-bold'}]}>
            No more pick up lines…
          </Text>
          <Text style={[styles.text, { marginTop: 20 }]}>
            We’re crafting and testing the new pick up lines right now! 
          </Text>
           <Text style={[styles.text, { marginTop: 20 }]}>
            Please, check back soon.
          </Text>
          </View>
        </View>
      <View style={styles.swipeButtonContainer}>
        <Image
          style={styles.image}
          source={require("../assets/cross-inactive.png")}
        />
        <Image
          style={styles.image}
          source={require("../assets/star-inactive.png")}
        />
      </View>
    </SafeAreaView>
  );
};
const p = 15;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
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
    marginHorizontal: 20
  },
  content: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    width: width - 15,
    marginTop: 40,
    paddingBottom: 0
  },
  bgContainer: {
    flex: 1,
    backgroundColor: "#FFF5F7",
    padding: wp(11),
    paddingTop: width * 0.5,
    // position: "relative",
    borderRadius: 20,
    // alignSelf: "flex-end"
  },
  bg: {
    width: width - p * 2,
    height: width * 0.4,
    resizeMode: "contain",
    position: "absolute",
    top: -40,
  },
  text: {
    color: "#000",
    fontSize: wp(4.0),
    textAlign: "center",
    // lineHeight:30
  },
};

export default NoMorePickUps;

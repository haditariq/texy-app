import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Header from "../components/common/Header";
import { wp } from "../utils/responsive";
import Purchases from "react-native-purchases";
import {useSelector, useDispatch} from 'react-redux';
import { subscribe } from "../state/swipeCounter";
const { width } = Dimensions.get("window");


const PayWall = (props) => {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.SwipeCounter.count);

  const purchaseSub = async () => {
    dispatch(subscribe());
    props.navigation.navigate("Dashboard")
    return;
    
    try {
      const offerings = await Purchases.getOfferings();
      console.warn(offerings);
      if (offerings.current !== null) {
        // Display current offering with offerings.current
      }
    } catch (e) {
      console.warn(e.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.bgContainer}>
          <Image
            style={styles.bg}
            source={require("../assets/paywall-bg.png")}
          />
          <Text style={styles.text}>
            Get immediate access to all opening lines and increase the chance to
            receive a reply by 60%.
          </Text>
          <Text style={[styles.text, { marginTop: 20 }]}>
            One payment. Forever.
          </Text>
          <Text style={[styles.text, { marginTop: 20, fontSize: wp(4.3), fontFamily:'Khula-ExtraBold',  }]}>
            Only 289 CZK
          </Text>
        </View>
        <View style={styles.continueButtonContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={purchaseSub}
          >
            <Text style={[styles.text, { color: "#fff" }]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const p = 15;
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    width: width - 15,
    marginTop: 40,
    paddingBottom: 0,
  },
  bgContainer: {
    flex: .7,
    backgroundColor: "#FFF5F7",
    padding: wp(11),
    paddingTop: width * 0.5,
    position: "relative",
    borderRadius: 20,
    // alignSelf: "flex-end"
  },
  bg: {
    width: width - p * 2,
    height: width * 0.515,
    resizeMode: "contain",
    position: "absolute",
    top: -40,
    left: -15
  },
  text: {
    color: "#000",
    fontSize: wp(3.8),
    textAlign: "center",
    fontFamily:'Khula-Bold'
    // lineHeight:30
  },
  continueButtonContainer: {
    flex:.25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  continueButton: {
    backgroundColor: "#FF6F87",
    borderRadius: 30,
    padding: 15,
    width: width - 60,
  }
};
export default PayWall;

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Header from "../components/common/Header";
import { wp } from "../utils/Responsive.js";
import Purchases from "react-native-purchases";
import { useSelector, useDispatch } from "react-redux";
import Unorderedlist from "react-native-unordered-list";
import {
  initializeSwiperCount,
  subscribe,
  unSubscribe
} from "../state/swipeCounter";
const { width, height } = Dimensions.get("window");

const PayWall = (props) => {

  const dispatch = useDispatch();
  const { isSubscribed } = useSelector((state) => state.SwipeCounter);
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (isSubscribed) {
      // props.navigation.navigate("Dashboard");
    }
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const offerings = await Purchases.getOfferings();
      if (
        offerings.current !== null &&
        offerings.current.availablePackages.length !== 0
      ) {
        setProduct(offerings.current.availablePackages[0]);
      }
    } catch (e) {
      alert("No products available.");
      setProduct({});
      return {};
    }
  };

  const purchaseSub = async () => {
    setLoader(true);
    try {
      const offerings = await Purchases.getOfferings();
      if (offerings.current !== null) {
        // console.warn(offerings.current.identifier);
        if (!isSubscribed) {
          await Purchases.purchaseProduct(
            offerings.current.identifier,
            null,
            Purchases.PURCHASE_TYPE.INAPP
          );
        }

        dispatch(subscribe());
        props.navigation.navigate("Dashboard");
        setLoader(false);
        return;
      }
    } catch (e) {
      if (Object.keys(product).length == 0) {
        alert("No products available.");
      }
      console.warn(e.message);
      setLoader(false);
    }
  };

  const restorePurchase = async () => {
    setLoader(true);
    try {
      const restore = await Purchases.restoreTransactions();
      if (restore.entitlements.active["texy.premium"].isActive) {
        dispatch(subscribe());
        props.navigation.navigate("Dashboard");
        setLoader(false);
      } else {
        alert("It seems like there is nothing to restore.");
        setLoader(false);
      }
    } catch (e) {
      alert("It seems like there is nothing to restore.");
      setLoader(false);

      return false;
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

          <View style={{ width: 260, marginTop: 32 }}>
            <Unorderedlist style={{ lineHeight: 34 }} bulletUnicode={0x2764}>
              <Text
                style={{
                  color: "#000",
                  lineHeight: 34,
                  fontSize: wp(3.8),
                  fontFamily: "Khula-Bold",
                  textAlign: "left"
                }}
              >
                Get access to all opening lines
              </Text>
            </Unorderedlist>
            <Unorderedlist style={{ lineHeight: 34 }} bulletUnicode={0x2764}>
              <Text
                style={{
                  color: "#000",
                  lineHeight: 34,
                  fontSize: wp(3.8),
                  fontFamily: "Khula-Bold",
                  textAlign: "left"
                }}
              >
                Increase your date chance by 60%
              </Text>
            </Unorderedlist>
            <Unorderedlist style={{ lineHeight: 34 }} bulletUnicode={0x2764}>
              <Text
                style={{
                  color: "#000",
                  lineHeight: 34,
                  fontSize: wp(3.8),
                  fontFamily: "Khula-Bold",
                  textAlign: "left"
                }}
              >
                Pay once, use forever
              </Text>
            </Unorderedlist>
          </View>

          {Object.keys(product).length > 0 ? (
            <Text
              style={[
                styles.text,
                {
                  marginTop: 30,
                  fontSize: wp(5),
                  fontFamily: "Khula-ExtraBold"
                }
              ]}
            >
              {" "}
              Only {product.product.price_string}
            </Text>
          ) : (
            <Text
              style={[
                styles.text,
                { marginTop: 30, fontSize: wp(3.3), fontFamily: "Khula-Bold" }
              ]}
            >
              {" "}
              "⚠️ Issue with fatching in-app purchase. Make sure your internet
              connection works."
            </Text>
          )}
        </View>
        <View style={styles.continueButtonContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={purchaseSub}
            disabled={loader}
          >
            <Text style={[styles.text, { color: "#fff" }]}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 40, marginTop: 4 }}>
          <Text style={styles.restoreColor}>
            Already Purchased Subscription?{" "}
          </Text>
          <TouchableOpacity onPress={restorePurchase}>
            <Text
              style={[styles.restoreColor, { textDecorationLine: "underline" }]}
            >
              Restore Purchase.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {loader && (
        <View style={styles.loaderContainer}>
          <View
            style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}
          >
            <ActivityIndicator size="large" color="black" />
          </View>
        </View>
      )}
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
    paddingBottom: 0
  },
  bgContainer: {
    flex: 1,
    backgroundColor: "#FFF5F7",
    padding: wp(8),
    paddingBottom: wp(5),
    paddingTop: width * 0.4,
    position: "relative",
    borderRadius: 20,
    width: 320
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
    fontFamily: "Khula-Bold"
    // lineHeight:30
  },
  continueButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  continueButton: {
    backgroundColor: "#FF6F87",
    borderRadius: 30,
    padding: 15,
    width: width - 60
  },
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "rgba(233,222,333,0.4)"
  },
  restoreColor: {
    fontSize: wp(3.2),
    color: "#A1ABB7",
    fontFamily: "Khula-Bold"
  }
};
export default PayWall;

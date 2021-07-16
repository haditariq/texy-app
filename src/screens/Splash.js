import React from "react";
import { View, ImageBackground, Text, StyleSheet, Image } from "react-native";
import bgImage from "../assets/happy-youngster-bg.png";
import { wp } from "../utils/responsive.js";
import { StackActions } from '@react-navigation/native';

const Splash = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.dispatch(
        StackActions.replace('BottomTab')
      );
    }, 5000);
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={require("../assets/logo.png")}
            />
            <Text style={styles.logoText}>Texy</Text>
          </View>
          <Text style={styles.splashText}>
            Get your messages answered with proven & creative opening lines.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = {
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: "rgba(255, 111, 135, .5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  logoImage: {
    height: 70,
    width: 70,
    borderRadius: 20
  },
  logoText: {
    fontSize: wp(6),
    color: "#fff",
    marginLeft: 10
  },
  splashText: {
    color: "#fff",
    fontSize: wp(4.8),
    textAlign: "center",
    marginTop: 15,
    fontFamily: 'Khula-bold',
    lineHeight: 28
  }
};

export default Splash;

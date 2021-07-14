import React from "react";
import { View, Text, Image } from "react-native";

const Header = ({ text, type }) => {
  return (
    <View style={[styles.container]}>
      {type == "text" ? (
        <Text style={styles.text}>{props.text}</Text>
      ) : (
        <Image style={styles.image} source={require("../../assets/logo.png")} />
      )}
    </View>
  );
};

const styles = {
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  text: {
    fontSize: 22
  },
  image: {
    height: 50,
    width: 50
  }
};

export default Header;

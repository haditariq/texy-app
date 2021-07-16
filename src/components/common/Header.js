import React from "react";
import { View, Text, Image } from "react-native";
import { wp } from "../../utils/responsive";

const Header = ({ text, type }) => {
  return (
    <View
      style={[
        styles.container,
        type == "text"
          ? { borderBottomColor: "#EFF3F8" }
          : { borderBottomColor: "transparent" }
      ]}
    >
      {type == "text" ? (
        <Text style={styles.text}>{text}</Text>
      ) : (
        <Image
          style={styles.image}
          source={require("../../assets/text-logo.png")}
        />
      )}
    </View>
  );
};

const styles = {
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
    borderBottomWidth: 1
  },
  text: {
    fontSize: wp(4.5),
    fontFamily: 'Khula-Bold'
  },
  image: {
    height: 35,
    resizeMode: "contain"
  }
};

export default Header;

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
        <Text style={[{ fontSize: wp(4.5), fontFamily: "Khula-Bold" }]}>
          {text}
        </Text>
      ) : (
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/circle-heart.png")}
          />
          <Text style={[styles.text, { fontFamily: "SFRounded-Ultralight" }]}>
            Texy
          </Text>
        </View>
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
    borderBottomWidth: 1,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: wp(6)
  },
  image: {
    height: 45,
    width: 45,
    resizeMode: "contain",
    marginRight: 5
  }
};

export default Header;

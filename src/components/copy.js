import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Clipboard from "@react-native-community/clipboard";
import { wp } from "../utils/responsive";
const Copy = ({ line }) => {
  const copyToClipboard = (line) => {
    Clipboard.setString(line);
  };

  return (
      <TouchableOpacity
        style={[styles.copyContainer]}
        onPress={() => copyToClipboard(line)}
      >
        <Image style={styles.image} source={require("../assets/copy-icon.png")} />
        <Text style={styles.copyText}>
          Copy!
        </Text>
      </TouchableOpacity>
  );
};
const styles = {
  copyContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "22%",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    alignSelf: "center",
    flexDirection:'row',
    paddingHorizontal: 5
  },
  image:{
    height:15,
    width:15,
    marginRight:4
  },
  copyText:{
    color: "#000",
    textAlign: "center",
    fontSize: wp(3.5),
  }
};
export default Copy;

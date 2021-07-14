import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Clipboard from "@react-native-community/clipboard";

const SavedLineCard = ({ line }) => {
  const copyToClipboard = (line) => {
    Clipboard.setString(line);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{line}</Text>
      <TouchableOpacity
        style={[styles.copyContainer]}
        onPress={() => copyToClipboard(line)}
      >
        <Image style={styles.image} source={require("../assets/copy-icon.png")} />
        <Text
          style={[
            styles.text,
            { color: "#000", lineHeight: 0, textAlign: "center" }
          ]}
        >
          Copy!
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  container: {
    width: "100%",
    backgroundColor: "#FF6F87",
    padding: 20,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",

  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#000000c",
    width: "78%",
    lineHeight: 20
  },
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
    width:15
  }
};
export default SavedLineCard;

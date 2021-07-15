import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Copy from '../components/copy';
import { wp } from "../utils/responsive";

const SavedLineCard = ({ line }) => {
  const copyToClipboard = (line) => {
    Clipboard.setString(line);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{line}</Text>
      <Copy line={line}/>  
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
    flexDirection:'row'
  },
  text: {
    color: "white",
    fontSize: wp(3.5),
    fontWeight: "bold",
    width: "78%",
    lineHeight: 20
  },
};
export default SavedLineCard;

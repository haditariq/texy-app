import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

let data = Array(20)
  .fill("")
  .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));
const SavedLineCard = ({onRemoveSavedLine}) => {
  return (
    <SwipeListView
      data={data}
      renderItem={(data, rowMap) => (
        <View style={styles.container}>
          <Text style={styles.text}>
            Are you a camera? Because every time I look at you I smiled.
          </Text>
          <TouchableOpacity style={styles.copyContainer}>
            <Text style={[styles.text, { color: "#000", lineHeight: 0 }]}>
              Copy
            </Text>
          </TouchableOpacity>
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.rowBack}>
        <TouchableOpacity onPress={()=> onRemoveSavedLine(data)}>
          <Image
            style={styles.dustbinIcon}
            source={require("../assets/dustbin.png")}
          />
          </TouchableOpacity>
        </View>
      )}
      // leftOpenValue={75}
      rightOpenValue={-85}
    />
  );
};
const styles = {
  container: {
    width: "100%",
    backgroundColor: "#FF6F87",
    padding: 20,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 5
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#000000c",
    width: "80%",
    lineHeight: 20
  },
  copyContainer: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 8,
    width: "20%",
    justifyContent: "center",
    alignItems: "center"
  },
  rowBack: {
    backgroundColor: "red",
    alignItems: "flex-end",
    justifyContent:'center'
  },
  dustbinIcon:{
    height: 60,
    width: 80,
    backgroundColor:'blue'
  }
};
export default SavedLineCard;

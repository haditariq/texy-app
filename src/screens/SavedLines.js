import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import SavedLineCard from "../components/SavedLineCard";
import { SwipeListView } from "react-native-swipe-list-view";
import Header from "../components/common/Header";

let data = [
  {
    id:1,
    line: "Are you a camera? Because every time I look at you I smiled."
  },{
    id:2,
    line: "Cool yoga pose - and not so easy. How long have you been practising?"
  },{
    id:3,
    line: "I’m asking around: Where can you get the best guacamole in town? Still haven't got a definitive answer…"
  },{
    id:4,
    line: "Coachella or Glastonbury?"
  },
]

const SavedLines = () => {
  const onRemoveSavedLine = (line) => {
    console.warn(line);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header type="text" text="Saved Lines"/>

      <View style={styles.content}>
       <SwipeListView
      data={data}
      renderItem={(data, rowMap) => (
      <SavedLineCard line={data.item.line} 
          // onRemoveSavedLine={onRemoveSavedLine(data.item)}
         />
          
      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.rowBack}>
          <TouchableOpacity onPress={() => onRemoveSavedLine(data.item)}>
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
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 20
  },
  rowBack: {
    flex:1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  dustbinIcon: {
    height: 70,
    width: 75,
    resizeMode:'cover'
  }
};

export default SavedLines;

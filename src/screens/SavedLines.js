import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import SavedLineCard from "../components/SavedLineCard";
import { SwipeListView } from "react-native-swipe-list-view";
import { useSelector, useDispatch } from 'react-redux';
import Header from "../components/common/Header";

const SavedLines = () => {
  const pickupLinesData = useSelector((state) => state.PickupLines.pickupLines);
  console.warn(pickupLinesData)

  const onRemoveSavedLine = (line) => {
    console.warn(line);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header type="text" text="Saved Lines"/>
      <View style={styles.content}>
       <SwipeListView
      data={pickupLinesData}
      renderItem={(data, rowMap) => (
      <SavedLineCard line={data.item.Question} />
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

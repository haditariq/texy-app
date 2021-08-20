import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import SavedLineCard from "../components/SavedLineCard";
import { SwipeListView } from "react-native-swipe-list-view";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/common/Header";
import { removePickLine } from "../state/pickupLines";

const SavedLines = () => {
  const dispatch = useDispatch();
  const pickupLinesData = useSelector((state) => state.PickupLines.pickupLines);

  const requestToRemoveSavedLine = (card) => {
    Alert.alert("Delete Pick Up Line", "Do you wish to permanently delete this pick up line?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Yes", onPress: () => onRemoveSavedLine(card) }
    ]);
  };
  const onRemoveSavedLine = (card) => {
    dispatch(removePickLine(card.id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header type="text" text="Saved Lines" />
      <View style={styles.content}>
        {pickupLinesData.length > 0 ? (
          <SwipeListView
            data={[...pickupLinesData].reverse()}
            renderItem={(data, rowMap) => (
              <SavedLineCard line={data.item.Question} />
            )}
            renderHiddenItem={(data, index) => (
              <View style={styles.rowBack}>
                <TouchableOpacity
                  onPress={() => requestToRemoveSavedLine(data.item)}
                >
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
        ) : (
          <Text>No saved lines at the moment. 👀</Text>
        )}
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
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rowBack: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  dustbinIcon: {
    height: 70,
    width: 75,
    resizeMode: "cover"
  }
};

export default SavedLines;

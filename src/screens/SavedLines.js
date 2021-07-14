import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import SavedLineCard from "../components/SavedLineCard";

const SavedLines = () => {
  const onRemoveSavedLine = (line) => {
    console.warn(line);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SavedLineCard onRemoveSavedLine={(line) => onRemoveSavedLine(line)} />
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
  }
};

export default SavedLines;

import React from "react";
import { View, Text } from "react-native";
import Copy from "./copy";

const SwipeCard = ({card, totalPickups, count,MAX_SWIPES}) => {
  console.warn(totalPickups)
  // return
  return (
    <View style={{ height: 300, width: "100%", backgroundColor: "red" }}>
      <Text>Already Swiped: {count}</Text>
      <Text>Total Swipes Available: {MAX_SWIPES}</Text>
      <Text>Total pickups available: {totalPickups}</Text>
      <Text
        style={{
          color: "#fff",
          width: "70%",
          textAlign: "center",
          marginTop: 20
        }}
      >
        {card.Topic}
      </Text>
      <Text
        style={{
          color: "#fff",
          width: "70%",
          textAlign: "center",
          margin: 5
        }}
      >
        {card.Question}
      </Text>
      <Copy />
    </View>
  );
};

export default SwipeCard;

import React from "react";
import { View, Text, Dimensions } from "react-native";
import Copy from "./copy";
import { wp } from "../utils/responsive";
const { width } = Dimensions.get("window");

const SwipeCard = ({ card, totalPickups, count, idx, MAX_SWIPES }) => {
  return (
    <View style={[styles.container, { opacity: 1}]}>
      <View style={styles.topRow}>
        <Text style={[styles.pickupText, { fontSize: wp(3.08) }]}>
          {count}/{MAX_SWIPES}
        </Text>
        <View style={styles.complimentBG}>
          <Text style={[styles.pickupText, { fontSize: wp(3.08) }]}>
            {card.Topic}
          </Text>
        </View>
      </View>
      <View style={styles.pickupContainer}>
        <Text style={styles.pickupText}>{card.Question}</Text>
      </View>

      <Copy />
    </View>
  );
};
/* <Text style={styles.text}>Total pickups available: {totalPickups}</Text> */

const styles = {
  container: {
    height: wp(110),
    width: width - wp(14),
    backgroundColor: "#FF6F87",
    borderRadius: 15,
    justifyContent: "center",
    paddingVertical: 15
    // alignItems: "center"
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  complimentBG: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: "#FF889C",
    borderRadius: 7
  },
  text: {
    color: "#fff",
    textAlign: "center"
  },
  pickupContainer: {
    flex: 1,
    width: width - wp(14),
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25
  },
  pickupText: {
    fontSize: wp(5.65),
    color: "#fff",
    textAlign: "center",
    lineHeight: 30,
    fontFamily: 'Khula-Bold'
  }
};

export default SwipeCard;

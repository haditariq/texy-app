import React from "react";
import { View, Text, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Copy from "./copy";
import { wp, hp } from "../utils/responsive";
const { width } = Dimensions.get("window");

const SwipeCard = ({ card, totalPickups,idx, MAX_SWIPES }) => {
  const {count, isSubscribed} = useSelector((state) => state.SwipeCounter);
  return (
    <View style={[styles.container, { opacity: 1 }]}>
      <View style={styles.topRow}>
        {!isSubscribed  ? 
        <Text style={[styles.pickupText, { fontSize: wp(3.6) }]}>
          {count}/{MAX_SWIPES} Free
        </Text>: <View/>
        }
        <View style={styles.complimentBG}>
          <Text style={[styles.pickupText, { fontSize: wp(3.6) }]}>
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

const styles = {
  container: {
    height: hp(55),
    width: width - wp(14),
    backgroundColor: "#FF6F87",
    borderRadius: 15,
    justifyContent: "center",
    paddingVertical: 15
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 5
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
    fontFamily: "Khula-Bold"
  }
};

export default SwipeCard;

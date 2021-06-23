import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  let TouchableMethod = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableMethod = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <TouchableMethod style={{ flex: 1 }} onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.meal.imageUrl }}
              style={styles.image}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.title} numberOfLines={1}>
                  {props.meal.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.meal.duration}m</Text>
            <Text>{props.meal.complexity}</Text>
            <Text>{props.meal.affordability}</Text>
          </View>
        </View>
      </TouchableMethod>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mealRow: {
    flexDirection: "row",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});

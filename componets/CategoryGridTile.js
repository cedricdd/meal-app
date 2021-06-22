import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableMethod = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableMethod = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableMethod style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, backgroundColor: props.category.color }}
        >
          <Text numberOfLines={2} style={styles.title}>
            {props.category.title}
          </Text>
        </View>
      </TouchableMethod>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    textAlign: "right",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
});

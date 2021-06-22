import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavoriteScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The FavoriteScreen screen</Text>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

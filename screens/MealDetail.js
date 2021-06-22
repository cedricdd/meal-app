import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const MealDetail = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetails screen</Text>
      <Button
        title="Go Back to Categories!"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

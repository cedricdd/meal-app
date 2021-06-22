import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

import { MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const category = props.navigation.getParam("category");

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(category.id);
  });

  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const category = navigationData.navigation.getParam("category");

  return {
    headerTitle: category.title,
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./MealItem";

const MealList = (props) => {
  const favoritesMeals = useSelector((state) => state.meals.favoritesMeals);

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        meal={itemData.item}
        isFavorite={favoritesMeals.some((meal) => meal.id === itemData.item.id)}
        onSelect={() => {
          props.navigation.navigate("MealDetail", { meal: itemData.item });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

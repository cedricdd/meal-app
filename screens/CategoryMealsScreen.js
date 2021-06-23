import React from "react";

import { MEALS } from "../data/dummy-data";
import MealList from "../componets/MealList";

const CategoryMealsScreen = (props) => {
  const category = props.navigation.getParam("category");

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(category.id);
  });

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const category = navigationData.navigation.getParam("category");

  return {
    headerTitle: category.title,
  };
};

export default CategoryMealsScreen;

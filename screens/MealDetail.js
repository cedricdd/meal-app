import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

import HeaderButton from "../componets/HeaderButton";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetail = (props) => {
  const { navigation } = props;
  const meal = props.navigation.getParam("meal");

  const isFavorite = useSelector((state) =>
    state.meals.favoritesMeals.some((mealCheck) => mealCheck.id === meal.id)
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(meal.id));
  }, [dispatch, meal]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFavorite: isFavorite });
  }, [isFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.mealDetail}>
        <Text>{meal.duration}m</Text>
        <Text>{meal.complexity}</Text>
        <Text>{meal.affordability}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((name) => (
        <ListItem key={name}>{name}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((name) => (
        <ListItem key={name}>{name}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetail.navigationOptions = (navigationData) => {
  const meal = navigationData.navigation.getParam("meal");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFavorite");

  return {
    headerTitle: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetail;

const styles = StyleSheet.create({
  mealDetail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  listItem: {
    marginVertical: 4,
    marginHorizontal: 20,
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 10,
  },
});

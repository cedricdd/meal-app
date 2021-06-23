import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../componets/HeaderButton";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetail = (props) => {
  const meal = props.navigation.getParam("meal");

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
        <ListItem>{name}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((name) => (
        <ListItem>{name}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetail.navigationOptions = (navigationData) => {
  const meal = navigationData.navigation.getParam("meal");

  return {
    headerTitle: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("add favorite");
          }}
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

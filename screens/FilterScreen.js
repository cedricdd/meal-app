import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import CustomHeaderButton from "../componets/HeaderButton";
import Colors from "../constants/Colors";
import { setFilters } from "../store/actions/meals";

const FilterScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
    };

    dispatch(setFilters(appliedFilters));
  }, [dispatch, isGlutenFree, isLactoseFree, isVegan]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const FilterSwitch = (props) => {
    return (
      <View style={styles.filterContainer}>
        <Text>{props.title}</Text>
        <Switch
          value={props.state}
          onValueChange={props.onChange}
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avaliable Filters</Text>
      <FilterSwitch
        title="Gluten Free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        title="Lactose Free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        title="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
    </View>
  );
};

export default FilterScreen;

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginTop: 25,
  },
});

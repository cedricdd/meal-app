import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initiaState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritesMeals: [],
};

const mealsReducer = (state = initiaState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritesMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoritesMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoritesMeals: updatedFavMeals };
      } else {
        return {
          ...state,
          favoritesMeals: state.favoritesMeals.concat(
            state.meals.find((meal) => meal.id === action.mealId)
          ),
        };
      }
    case SET_FILTERS:
      const updateFilteredMeals = state.meals.filter((meal) => {
        if (action.filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (action.filters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (action.filters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updateFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;

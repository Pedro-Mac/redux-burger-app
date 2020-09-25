import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingName, ingPrice) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName,
    ingredientPrice: ingPrice
  };
};

export const removeIngredient = (ingName, ingPrice) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName,
    ingredientPrice: ingPrice
  };
};

export const setIngredients = ingredients => {
  return { type: actionTypes.SET_INGREDIENTS, ingredients: ingredients };
};
export const setIngredientsFailed = () => {
  return { type: actionTypes.SET_INGREDIENTS_FAILED };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get('https://react-my-burger.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(setIngredientsFailed());
      });
  };
};

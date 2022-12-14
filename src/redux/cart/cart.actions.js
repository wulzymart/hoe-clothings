import cartActionTypes from "./cart.types";
export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
export const addItems = (item) => ({
  type: cartActionTypes.ADD_ITEMS,
  payload: item,
});
export const removeItems = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
export const clearItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

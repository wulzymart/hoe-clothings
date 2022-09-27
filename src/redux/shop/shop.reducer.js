import SHOP_DATA from "./shop.data";
const INNITIAL_STATE = {
  collections: SHOP_DATA,
};
export const shopReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

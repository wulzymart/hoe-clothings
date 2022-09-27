import { createSelector } from "reselect";
export const selectShopCollections = (state) => state.shop.collections;
export const SelectCollectionsForPreview = createSelector(
  selectShopCollections,
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const selectCollection = (paramsId) =>
  createSelector(selectShopCollections, (collections) => collections[paramsId]);

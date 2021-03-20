import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopList = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionToPreview = createSelector(
  [selectShopList],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParams =>
  createSelector([selectShopList], collections =>
    collections ? collections[collectionUrlParams] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectCollectionIsLoading = createSelector(
  [selectShop],
  shop => !!!shop.collections
);

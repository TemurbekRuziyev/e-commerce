import { ShopTypes } from './shop.types';

import {
  firestore,
  convertCollectionsToSnapshot,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collections => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        //For getting data from Firebase Database;
        const collectionMap = convertCollectionsToSnapshot(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error)));
  };
};

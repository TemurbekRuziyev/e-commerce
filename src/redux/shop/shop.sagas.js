import { takeLatest, call, put, all } from 'redux-saga/effects';

import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';

import {
  firestore,
  convertCollectionsToSnapshot,
} from '../../firebase/firebase.utils';

import { ShopTypes } from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsToSnapshot, snapshot);

    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
};

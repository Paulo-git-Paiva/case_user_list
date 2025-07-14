import { all } from 'redux-saga/effects';
import { usersSaga } from './users/sagas';

export default function* rootSaga() {
  yield all([
    usersSaga(),
  ]);
}

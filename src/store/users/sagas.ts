import { call, delay, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUsersSuccess, fetchUsersFailure } from './actions';
import { User } from './types';
import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';

function* fetchUsersSaga(): SagaIterator {
  try {
    const response: AxiosResponse<User[]> = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');

  yield delay(1000);
      
    yield put(fetchUsersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* usersSaga(): SagaIterator {
  yield takeLatest('FETCH_USERS_REQUEST', fetchUsersSaga);
}

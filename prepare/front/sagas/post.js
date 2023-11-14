import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import { fork } from 'redux-saga/effects';

function addPostAPI() {
  return axios.post('/api/post');
}

function* addPost() {
  try {
    yield delay(1000);
    // const result = yield call(addPostAPI);
    yield put({
      type: 'ADD_POST_SUCCESS',
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  //2초 동안 1번의 요청만 가능
  // yield throttle('ADD_POST_REQUEST', addPost, 2000);
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}

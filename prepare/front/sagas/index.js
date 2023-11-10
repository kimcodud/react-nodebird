import { all, fork, call, take, put } from 'redux-saga/effects';
import axios from 'axios';

//*붙이지 말것, 실제 서버 요청
function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    //fork -> 함수 실행 =/= call (둘 다 generator 함수 실행)
    //fork는 비동기 함수 호출(non-blocking),  call은 동기 함수 호출(blocking)
    const result = yield call(logInAPI, action.data);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}

function addPostAPI() {
  return axios.post('/api/post');
}

function* logOut() {
  try {
    const result = yield call(addPostAPI);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPostAPI);
}

export default function* rootSaga() {
  //all은 배열 받아서 배열 안의 요소들 한번에 실행
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}

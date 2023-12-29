import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
} from '../reducers/user';

//*붙이지 말것, 실제 서버 요청
function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    //서버 구현 전까지 비동기 효과 주기
    yield delay(1000);
    // const result = yield call(logInAPI);
    //fork -> 함수 실행 =/= call (둘 다 generator 함수 실행)
    //fork는 비동기 함수 호출(non-blocking),  call은 동기 함수 호출(blocking)
    yield put({
      type: LOG_IN_SUCCESS,
      // data: result.data,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    yield delay(1000);
    // const result = yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post('/api/signUp');
}

function* signUp() {
  try {
    yield delay(1000);
    // const result = yield call(signUpAPI);
    yield put({
      type: SIGN_UP_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  //take는 일회성, 한번 실행 후 이벤트리스너 사라짐 (따라서 while(true)문으로 감싸주면 에러없이 무한 사용 가능)
  //하지만 반복문은 직관적x -> takeEvery로 대체 가능
  //실수로 클릭 여러 번 한다면? -> takeLatest 사용시 마지막 요청만 실행
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}

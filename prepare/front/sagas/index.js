import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  //all은 배열 받아서 배열 안의 요소들 한번에 실행
  yield all([fork(postSaga), fork(userSaga)]);
}

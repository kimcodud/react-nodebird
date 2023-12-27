import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/api/post');
}

function* addPost(action) {
  try {
    yield delay(1000);
    // const result = yield call(addPostAPI);
    yield put({
      type: ADD_POST_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    yield delay(1000);
    // const result = yield call(addCommentAPI);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  //2초 동안 1번의 요청만 가능
  // yield throttle('ADD_POST_REQUEST', addPost, 2000);
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  //2초 동안 1번의 요청만 가능
  // yield throttle('ADD_POST_REQUEST', addPost, 2000);
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
  yield all([fork(watchAddComment)]);
}

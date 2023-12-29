export const initialState = {
  logInLoading: false, //로그인 시도 중
  logInDone: false,
  logInError: null,
  logOutLoading: false, //로그아웃 시도 중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, //회원가입 시도 중
  signUpDone: false,
  signUpError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

//action creator
//redux thunk를 쓰면 함수 리턴하는 비동기 액션 크리에이터 하나 추가
// export const loginAction = (data) => {
//   return (dispatch, getState) => {
//     const state = getState();
//     dispatch(loginRequestAction());
//     axios
//       .post('/api/login')
//       .then((res) => {
//         dispatch(loginSuccessAction(res.data));
//       })
//       .catch((err) => {
//         dispatch(loginFailureAction(err));
//       });
//   };
// };

//오타 방지를 위해 변수로 선언
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const dummyUser = (data) => ({
  ...data,
  nickname: 'cykim',
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
});

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: LOG_OUT_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data),
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginInError: false,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
        // me: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        // me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
        // me: null,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
        // me: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
        // me: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
        // me: null,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
        // me: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
        // me: null,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
        // me: null,
      };
    default:
      return state;
  }
};

export default reducer;

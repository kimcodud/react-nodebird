export const initialState = {
  isLoggingIn: false, //로그인 시도 중
  isLoggedIn: false,
  isLoggingOut: false, //로그아웃 시도 중
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

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: 'LOG_OUT_REQUEST',
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        isLoggingIn: true,
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'cykim' },
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true,
        // me: null,
      };
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        // me: null,
      };
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: true,
        // me: null,
      };
    default:
      return state;
  }
};

export default reducer;

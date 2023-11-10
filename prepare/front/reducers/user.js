export const initialState = {
  isLoggedIn: false,
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

export const loginSuccessAction = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
  };
};

export const loginFailureAction = (data) => {
  return {
    type: 'LOG_IN_FAILURE',
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: 'LOG_OUT_REQUEST',
    data,
  };
};

export const logoutSuccessAction = (data) => {
  return {
    type: 'LOG_OUT_SUCCESS',
    data,
  };
};

export const logoutFailureAction = (data) => {
  return {
    type: 'LOG_OUT_FAILURE',
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;

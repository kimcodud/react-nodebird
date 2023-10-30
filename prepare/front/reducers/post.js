export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
          src: 'https://t4.ftcdn.net/jpg/02/64/15/41/240_F_264154131_XvpBI5fARjB7Qlo4PMrMMTaunXha47NR.jpg',
          src: 'https://t3.ftcdn.net/jpg/02/97/99/50/240_F_297995004_KIRJlI4JXoOGdnk6fj8NMTC9Xvt7b5Im.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'user1',
          },
          content: '귀여워요!',
        },
        {
          User: {
            nickname: 'user2',
          },
          content: '고양이 최고~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: '더미데이터 입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;

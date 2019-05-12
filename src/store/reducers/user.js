const initState = {
  userName: null,
  userAvatar: null,
  token: null,
}

const user = (state = initState, action) => {
  switch(action.type) {
    case 'SET_USER':
      state.userName = action.user.userName;
      state.userAvatar = action.user.userAvatar;
      state.token = action.user.token;
      return state;
    case 'CLEAR_USER':
      return state = initState;
    default:
      return state;
  }
}

export default user;

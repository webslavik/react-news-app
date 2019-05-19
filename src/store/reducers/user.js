const initState = {
  userName: null,
  userAvatar: null,
  token: null,
}

const user = (state = initState, action) => {
  switch(action.type) {
    case 'SET_USER':
      return Object.assign({}, state, {
        userName: action.user.userName,
        userAvatar: action.user.userAvatar,
        token: action.user.token,
      });
    case 'CLEAR_USER':
      return Object.assign({}, state, {
        userName: null,
        userAvatar: null,
        token: null,
      });
    default:
      return state;
  }
}

export default user;

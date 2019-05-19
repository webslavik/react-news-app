import { LOGIN_USER, LOGOUT_USER } from '../actions';

const initState = {
  name: null,
  avatar: null,
  token: null,
}

const auth = (state = initState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        name: action.authData.name,
        avatar: action.authData.avatar,
        token: action.authData.token,
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        userName: null,
        userAvatar: null,
        token: null,
      });
    default:
      return state;
  }
}

export default auth;

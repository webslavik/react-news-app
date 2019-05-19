import { api } from '../../api';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const logoutUser = () => ({
  type: LOGOUT_USER,
});


const loginUserAction = authData => ({
  type: LOGIN_USER,
  authData,
});

export const loginUser = ({ user, googleToken }) => {
  return async (dispatch) => {
    try {
      const token = await api.getAuthToken(googleToken);

      dispatch(loginUserAction({ 
        token,
        name: user.name,
        avatar: user.imageUrl,
      }));
    } catch (err) {
      console.log(`[ERROR] Can't auth user!`);
    }
  }
};

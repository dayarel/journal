import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const startLoginEmailPass = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Pedro"));
    }, 3500);
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL));
      });
  };
};

export const login = (uid, displayName, photoURL) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    photoURL,
  },
});

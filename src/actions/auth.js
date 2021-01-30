import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { startLoading, finishLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(finishLoading());
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
          photoURL:
            "https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg",
        });
        dispatch(login(user.uid, user.displayName, user.photoURL));
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL));
      })
      .catch((err) => console.log(err));
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

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});

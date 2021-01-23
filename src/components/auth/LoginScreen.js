import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startGoogleLogin, startLoginEmailPass } from "../../actions/auth";
import { setError, removeError } from "../../actions/ui";
import validator from "validator";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [formValues, handleInputChange, reset] = useForm({
    email: "nando@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const { msgError } = state.ui;

  const isLoginValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("Password must be at least 6 characters"));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (isLoginValid()) {
      dispatch(startLoginEmailPass(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          className="auth__input skew-dark"
          placeholder="Your Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input skew-dark"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link animated__underline" to="/auth/register">
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;

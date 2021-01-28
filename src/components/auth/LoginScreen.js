import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { setError, removeError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm({
    email: "david@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isLoginValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isLoginValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.trim().length < 5) {
      dispatch(setError("Password must contain at least 6 characters"));
      return false;
    }
    dispatch(removeError);
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      {msgError && <div className="auth__alert-error mt-5">{msgError}</div>}
      <form onSubmit={handleLogin}>
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
        <div className="auth__social-networks" onClick={handleGoogleLogin}>
          <p>Login with social networks</p>
          <div className="google-btn">
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

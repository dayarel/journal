import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { setError, removeError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    name: "David",
    email: "dayarel@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(removeError());
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("password should be at least 6 characters and match"));
      return false;
    }
    dispatch(removeError);
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Hola Mundo</div>
        <input
          type="text"
          className="auth__input skew-dark"
          placeholder="Name"
          name="name"
          value={name}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="auth__input skew-dark"
          placeholder="Your email"
          name="email"
          value={email}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input skew-dark"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input skew-dark"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>
        <Link to="/auth/login" className="link animated__underline">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;

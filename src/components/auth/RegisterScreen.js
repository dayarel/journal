import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          type="text"
          className="auth__input skew-dark"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input
          type="text"
          className="auth__input skew-dark"
          placeholder="Your email"
          name="email"
          autoComplete="off"
        />
        <input
          type="password"
          className="auth__input skew-dark"
          placeholder="Password"
          name="password"
        />
        <input
          type="password"
          className="auth__input skew-dark"
          placeholder="Confirm Password"
          name="confirm"
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

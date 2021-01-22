import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

const RegisterScreen = () => {
  const [formValues, inputHandleChange] = useForm({
    name: "Hernando",
    email: "nando@gmail.com",
    password: "123456",
    confirm: "123456",
  });

  const { name, email, password, confirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("Formulario correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("Name is required");
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("Please enter a valid email");
      return false;
    } else if (password !== confirm || password.length < 5) {
      console.log("Password should be at least 6 characters and match");
      return false;
    }
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
          autoComplete="off"
          value={name}
          onChange={inputHandleChange}
        />
        <input
          type="text"
          className="auth__input skew-dark"
          placeholder="Your email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={inputHandleChange}
        />
        <input
          type="password"
          className="auth__input skew-dark"
          placeholder="Password"
          name="password"
          value={password}
          onChange={inputHandleChange}
        />
        <input
          type="password"
          className="auth__input skew-dark"
          placeholder="Confirm Password"
          name="confirm"
          value={confirm}
          onChange={inputHandleChange}
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

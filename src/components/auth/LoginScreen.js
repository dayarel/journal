import React from "react";

const LoginScreen = () => {
  return (
    <>
      <h3>Login</h3>
      <form>
        <input type="text" placheolder="youremail@email.com" name="email" />
        <input type="password" placheolder="Password" name="password" />
        <button type="submit">Login</button>
        <hr />
        google
      </form>
    </>
  );
};

export default LoginScreen;

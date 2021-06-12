import React, { useState } from "react";
import { signin, authenticate, isAutheticated } from "./helper/api";
import { Redirect } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    success: false,
    didRedirect: false,
  });
  const { email, password, error, loading, success, didRedirect } = values;
  const { user } = isAutheticated();
  //   console.log(isAutheticated().user);

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, success: true, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            success: false,
            loading: false,
          });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              success: true,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };
  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      if (isAutheticated().user.role === 5) {
        return <Redirect to="/admin/dashboard" />;
      } else if (isAutheticated().user.role === 4) {
        console.log(user.role);
        <Redirect to="/admin/dashboard" />;
      } else if (user && user.role === 3) {
        console.log(user.role);
      } else if (user && user.role === 2) {
        console.log(user.role);
      } else {
        console.log(user.role);
        return <Redirect to="/signup" />;
      }
    }
    // if (isAutheticated().user.role === 5) {
    //   return <Redirect to="/admin/dashboard" />;
    // }
  };
  const successMessage = () => {
    return (
      <div className="">
        <div className="">
          <div style={{ display: success ? "" : "none" }}></div>
        </div>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className="">
        <div className="">
          <div style={{ display: error ? "" : "none" }}>
            <h1>error</h1>
          </div>
        </div>
      </div>
    );
  };
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const signInForm = () => {
    return (
      <div className="center">
        <div className="">
          <form>
            <h2>WELCOME</h2>
            <div className="form-group">
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <button onClick={onSubmit} className="submit_btn btn-block">
              Signin
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </div>
  );
};

export default Signin;

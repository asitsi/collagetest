import React, { useState } from "react";

import { signup } from "./helper/api";
const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    userId: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    error: "",
    success: false,
  });

  const { name, userId, email, password, age, phone, error, success } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, userId, email, password, age, phone })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
          console.log(data.error);
        } else {
          setValues({
            ...values,
            name: "",
            userId: "",
            email: "",
            password: "",
            age: "",
            phone: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
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
            <h1>Error</h1>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {successMessage()}
      {errorMessage()}
      <div className="center">
        <div className="">
          <form className="">
            <h2>Sign up</h2>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("userId")}
                type="text"
                value={userId}
                placeholder="UserId"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("age")}
                type="text"
                value={age}
                placeholder="Age"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("phone")}
                type="text"
                value={phone}
                placeholder="Phone-Number"
              />
            </div>

            <button onClick={onSubmit} className="submit_btn btn-block">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

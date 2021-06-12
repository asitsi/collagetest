import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { user } from "./helper/api";

const AdminDashboard = () => {
  const [users, setUser] = useState([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    user().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setUser(data.reverse());
        console.log(data);
      }
    });
  };

  return (
    <div>
      <h1 className="center">ADMIN DASHBOARD</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => {
            if (data.role === 5) {
              return;
            } else if (data.role === 3) {
              return;
            } else if (data.role === 2) {
              return;
            } else if (data.role === 1) {
              return;
            } else if (data.role === 0) {
              return;
            }
            return (
              <tr>
                <th key={index}>{index + 1}</th>
                <td>
                  <Link to={"/dashboard/" + data._id}>{data.name}</Link>
                </td>
                <td>
                  <Link to={"/dashboard/" + data._id}>{data.email}</Link>
                </td>
                <td>
                  <Link to={"/dashboard/" + data._id}>{data.age}</Link>
                </td>
                <td>
                  <Link to={"/dashboard/" + data._id}>{data.phone}</Link>
                </td>
                <td>
                  <Link to={"/dashboard/" + data._id}>{data.role}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

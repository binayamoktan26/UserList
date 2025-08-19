import React, { useState } from "react";
export const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
    // console.log(user);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="w-50 p-3 shadow-lg   m-auto mt-5 rounded">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2">
          <div className="col-md-3">
            <select
              name="gender"
              id="inputState"
              className="form-select"
              defaultValue=""
              onChange={handleOnChange}
              required
            >
              <option value="">Choose...</option>
              <option value="male">Male</option>
              <option value="FeMale">feMale</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="User Name"
              aria-label="Last name"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

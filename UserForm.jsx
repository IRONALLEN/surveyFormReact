import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (data) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    data.preventDefault();

    // create a javascript object to hold all of the values
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={createUser}>
      <div className="Pbox">
        <div className="border">
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(data) => setFirstName(data.target.value)}
          />
        </div>
        <div className="border">
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(data) => setLastName(data.target.value)}
          />
        </div>
        <div className="border">
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(data) => setEmail(data.target.value)}
          />
        </div>
        <div className="border">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(data) => setPassword(data.target.value)}
          />
        </div>
        <div className="border">
          <label>
            Confirm <br /> Password:{" "}
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(data) => setConfirmPassword(data.target.value)}
          />
        </div>
      </div>
      <>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>
          Confirm <br /> Password: {confirmPassword}
        </p>
      </>
    </form>
  );
};

export default UserForm;

import React, { useState } from "react";

const UserProfile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const createUser = (data) => {
    // create a javascript object to hold all of the values
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setHasBeenSubmitted(true);
  };
  const handleFirst = (data) => {
    data.preventDefault();
    // we must prevent the default refresh of the browser to keep our state from being reset
    setFirstName(data.target.value);
    if (data.target.value.length < 1) {
      setError("First Name is required!");
    } else if (data.target.value.length < 3) {
      setError("First Name must be 3 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setError("");
    }
  };
  const handleLast = (data) => {
    setLastName(data.target.value);
    if (data.target.value.length < 1) {
      setError2("Last Name is required!");
    } else if (data.target.value.length < 3) {
      setError2("Last name must be 3 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setError2("");
    }
  };

  const handleEmail = (data) => {
    setEmail(data.target.value);
    if (data.target.value.length < 1) {
      setError3("Email is required!");
    } else if (data.target.value.length < 5) {
      setError3(" Email must be 5 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setError3("");
    }
  };

  const handlePassword = (data) => {
    setPassword(data.target.value);
    if (data.target.value.length < 1) {
      setError4("Password is required!");
    } else if (data.target.value.length < 8) {
      setError4(" Password must be 8 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setError4("");
    }
  };

  const handlePassCheck = (data) => {
    setConfirmPassword(data.target.value);
    if (data.target.value > 1) {
      setError5("Password is required!");
    } else if (data.target.value != password) {
      setError5(" Passwords must match");
    } else {
      // an empty string is considered a "falsy" value
      setError5("");
    }
  };

  const formMessage = () => {
    if (hasBeenSubmitted) {
      return "Thank you for submitting the form!";
    } else {
      return "Welcome, please submit the form";
    }
  };

  return (
    <form onSubmit={createUser}>
      <div className="Pbox">
        <h3>{formMessage()}</h3>
        <div className="border">
          <label>First Name:* </label>
          <input type="text" onChange={handleFirst} />
        </div>
        {error ? <p>{error}</p> : ""}
        <div className="border">
          <label>Last Name:* </label>
          <input type="text" onChange={handleLast} />
        </div>
        {error2 ? <p>{error2}</p> : ""}
        <div className="border">
          <label>Email:* </label>
          <input type="text" onChange={handleEmail} />
        </div>
        {error3 ? <p>{error3}</p> : ""}
        <div className="border">
          <label>Password:* </label>
          <input type="password" value={password} onChange={handlePassword} />
        </div>
        {error4 ? <p>{error4}</p> : ""}
        <div className="border">
          <label>
            Confirm * <br /> Password:{" "}
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handlePassCheck}
          />
        </div>
        {error5 ? <p>{error5}</p> : ""}
        {error ? (
          <input type="submit" value="CreateUser" disabled />
        ) : (
          <input type="submit" value="Create User" />
        )}
      </div>
    </form>
  );
};

export default UserProfile;

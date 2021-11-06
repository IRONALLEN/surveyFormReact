import React, { useState } from "react";

const Greet = (props) => {
  const [age, setAge] = useState(props.age);
  return (
    <>
      <h1>{props.name}</h1>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hcolor}</p>
      <button onClick={(event) => setAge(age + 1)}>
        Birthday Button for {props.rName}
      </button>
    </>
  );
};

export default Greet;

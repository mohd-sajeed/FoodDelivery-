import React, { useEffect } from "react";
import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
      // * API call
    // async function getUserInfo() {
    // }
    const timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
    console.log("useEffect");

    // Cleanup
    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);

  console.log("render()");
  return (
    <div className="user-card">
      <h2>Profile Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count:{count}</h3>
      <h3>Count2:{count2}</h3>
      <button
        onClick={() => {
          setCount(1);
          setCount2(1);
        }}
      >
        SetCount
      </button>
    </div>
  );
};

export default User;

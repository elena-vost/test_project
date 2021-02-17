import React, { useState } from "react";

export function PropTest(props) {
  const [state, setState] = useState("Hi im Lena");

  const { myTextProp } = props;
  const handleChange = (e) => {
    
    setState(e.target.value);
  };
  const handleClick = (e) => {
    console.log(e)
  };

  return (
    <div>
      <h1>{myTextProp}</h1>
      <h2>{state}</h2>
      <input onChange={handleChange} type="text" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

import { useState } from "react";
import { PropTest } from "./components/PropTest";
import Lena from "./components/Lena";

import "./App.css";

const imgs = ["first", "second", "third", "forth", "5"];

function App() {
  const [name, setName] = useState("Lena");
  const handleChange = (e) => {
    const value = e.target.value;

    setName(value);
  };
  return (
    <div className="App">
      <h1>Main page</h1>
      <Lena name={name} family="Vostrikov" />
      <input onChange={handleChange} type="text"></input>
    </div>
  );
}

export default App;

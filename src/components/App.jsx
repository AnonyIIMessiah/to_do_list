import React from "react";

function App() {
  const [val, setVal] = React.useState("");
  const [arr, setVal1] = React.useState([]);
  function change(event) {
    setVal(event.target.value);
    console.log(val);
  }
  function submitIt() {
    setVal1((prevVal) => {
      return [...prevVal, val];
    });
    console.log(arr);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={change} />
        <button onClick={submitIt}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((items) => (
            <li>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

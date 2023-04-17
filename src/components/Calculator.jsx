import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const number1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const number2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
    setNumber1("0")
    setNumber2("0")
  };
  return (
    <div className="calculator-container">
      <h1>UseState</h1>
      <div className="form-container">
        <label className="form-label" htmlFor="number1">
          Number1
        </label>
        <input
          type="number"
          className="form-input"
          id="number1"
          onChange={number1Change}
          value={number1}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="number2">
          Number2
        </label>
        <input
          type="number"
          className="form-input"
          id="number2"
          onChange={number2Change}
          value={number2}
        />
      </div>
      <button onClick={handleAddition}>Add</button>
      <div className="form-group">
        <label className="form-label" htmlFor="result">
          Result
        </label>
        <input type="number" className="form-input" id="result" value={result} readOnly/>
      </div>
    </div>
  );
};

export default Calculator;

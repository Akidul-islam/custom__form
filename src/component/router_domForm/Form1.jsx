import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form1() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ fristName: "", lastName: "" });
  const { fristName, lastName } = inputValue;
  const change = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const h = (e) => {
    e.preventDefault();
    navigate("/form2", { state: { inputValue } });
  };
  return (
    <form onSubmit={h}>
      <input
        className="block"
        type="text"
        name="fristName"
        value={fristName}
        onChange={change}
      />
      <input type="text" name="lastName" value={lastName} onChange={change} />
      <input type="submit" value="next" />
    </form>
  );
}

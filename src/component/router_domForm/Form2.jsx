import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function Form2() {
  const navigate = useNavigate();
  const form1Data = useLocation().state?.inputValue;
  const [state1, setState] = useState({ email: "", phone: "" });
  const { email, phone } = state1;
  const change = (e) => {
    setState({ ...state1, [e.target.name]: e.target.value });
  };
  const h = (e) => {
    e.preventDefault();
    navigate("/form3", { state: { data: { ...state1, ...form1Data } } });
  };
  const prev = () => {};
  return (
    <form onSubmit={h}>
      <label className="block text-red-400" htmlFor="name">
        Name
      </label>
      <input
        className="block"
        type="text"
        name="email"
        placeholder="phone"
        value={email}
        onChange={change}
      />
      <input type="text" name="phone" value={phone} onChange={change} />
      <input type="submit" value="next" />
      <button type="button" onClick={prev}>
        Prev
      </button>
    </form>
  );
}

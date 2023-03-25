import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Form3({ getData }) {
  const navigate = useNavigate();
  const data1 = useLocation().state?.data;
  const [state, setState] = useState({ address: "", password: "" });
  const { address, password } = state;
  const change = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const h = (e) => {
    e.preventDefault();
    getData({ ...data1, ...state });
    navigate("/formshow");
  };
  const prev = () => {
    window.history.back();
  };
  return (
    <form onSubmit={h}>
      <input
        className="block"
        type="text"
        name="address"
        placeholder="final submision"
        value={address}
        onChange={change}
      />
      <input type="text" name="password" value={password} onChange={change} />
      <input type="submit" value="confirm" />
      <button onClick={prev}> prev</button>
    </form>
  );
}

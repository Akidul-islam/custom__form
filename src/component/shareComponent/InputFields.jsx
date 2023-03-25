import {
  BLURHANDLER,
  CHANGEHANDLER,
  FOCUSHANDLER
} from "../clientDataBase/reducer";

export default function InputFields({
  label,
  name,
  type,
  required,
  validation,
  dispatch,
  inputValue
}) {
  const changeHandler = (event) => {
    dispatch({
      type: CHANGEHANDLER,
      val: event.target
    });
  };

  const blurHandler = (event) => {
    const { name, value } = event.target;
    dispatch({ type: BLURHANDLER, name, value });
  };

  const focusHandler = (event) => {
    dispatch({ type: FOCUSHANDLER });
  };
  return (
    <div key={label}>
      <label htmlFor={name}>{label}</label>

      <div>
        <input
          onBlur={blurHandler}
          onFocus={focusHandler}
          onChange={changeHandler}
          name={name}
          value={inputValue?.formInput[name] || ""}
          type={type}
        />
        {required && inputValue?.errors[name] && <h4>{validation.message}</h4>}
      </div>
    </div>
  );
}

export function CheckBox({ type, name, inputValue, dispatch }) {
  const changeHandler = (event) => {
    dispatch({
      type: CHANGEHANDLER,
      val: event.target
    });
  };

  return (
    <input
      checked={inputValue?.formInput[name] || false}
      onChange={changeHandler}
      type={type}
      name={name}
    />
  );
}

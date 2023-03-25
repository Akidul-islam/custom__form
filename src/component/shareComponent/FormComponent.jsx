import { useReducer } from "react";
import InputFields, { CheckBox } from "./InputFields";
import formReducer, { data, SUBMITHANDLER } from "../clientDataBase/reducer";

export default function FormComponent({ inputData, title }) {
  const [inputValue, dispatch] = useReducer(formReducer, data);

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: SUBMITHANDLER });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>{title}</div>
      {inputData &&
        inputData.map((item) => {
          switch (item.type) {
            case "text":
            case "email":
            case "password":
              return (
                <InputFields
                  key={item.label}
                  {...item}
                  inputValue={inputValue}
                  dispatch={dispatch}
                />
              );
            case "checkbox":
              return (
                <CheckBox
                  key={item.label}
                  {...item}
                  inputValue={inputValue}
                  dispatch={dispatch}
                />
              );
            default:
              return null;
          }
        })}
      <input type="submit" value="Submit" />
    </form>
  );
}

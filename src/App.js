import "./styles.css";

import { Routes, Route } from "react-router-dom";
import FormComponent from "./component/shareComponent/FormComponent";
const data = [
  {
    name: "name",
    type: "text",
    label: "Name",
    required: true,
    validation: {
      validator: (value) => {},
      message: "name is required and string",
      minlen: 5,
      maxlen: 20
    }
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    validation: {
      validator: (value) => {},
      message: "email is required and string"
    }
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    validation: {
      validator: (value) => {},
      message: "password is required and string",
      minlen: 6,
      maxlen: 15
    }
  },
  {
    name: "checked",
    type: "checkbox",
    label: "agree with terms",
    required: true
  },
  {
    name: "textarea",
    type: "textarea",
    label: "agree with terms",
    required: true,
    validation: {
      validator: (value) => {},
      message: "name is required and string",
      minlen: 20,
      maxlen: 1000
    }
  }
];
export default function App() {
  // const [formData, setFromData] = useState([]);
  // const getData = (data) => {
  //   setFromData([...formData, data]);
  // };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <FormComponent
              validator={[]}
              title={"Reusable form"}
              inputData={data}
            />
          }
        />
      </Routes>
    </div>
  );
}

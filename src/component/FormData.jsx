import { Fragment } from "react";

export default function FormShow({ data }) {
  return (
    <Fragment>
      <h2>multipart form</h2>
      <ul>
        {data &&
          data.map((item, index) => {
            return (
              <li key={index}>
                <h4>{item.fristName}</h4>
                <h4>{item.lastName}</h4>
                <h4>{item.email}</h4>
                <h4>{item.address}</h4>
                <h4>{item.phone}</h4>
                <h4>{item.password}</h4>
              </li>
            );
          })}
      </ul>
    </Fragment>
  );
}

import logo from "./logo.svg";
import "./App.css";

function PersonDetails() {
  const Person = {
    Name: "Le Ngoc",
    Age: 21,
    Occupition: "Student",
  };

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {Person.Name}
      </p>
      <p>
        <strong>Age: </strong>
        {Person.Age}
      </p>
      <p>
        <strong>Occupition: </strong>
        {Person.Occupition}
      </p>
    </div>
  );
}

export default PersonDetails;

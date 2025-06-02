import logo from "./logo.svg";
import "./App.css";

function PeopleList() {
  const People = [
    { Name: "Le Ngoc", Age: 21, Occupition: "Students " },
    { Name: "Ngoc Le", Age: 29, Occupition: "Teacher " },
    { Name: "Le Le", Age: 22, Occupition: "Students " },
  ];

  return (
    <div>
      <h2>List of People</h2>
      <ul>
        {People.map((person, index) => (
          <li key={index}>
            <p>
              <strong>Name:</strong> {person.Name}
            </p>
            <p>
              <strong>Age:</strong> {person.Age}
            </p>
            <p>
              <strong>Occupation:</strong> {person.Occupition}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;

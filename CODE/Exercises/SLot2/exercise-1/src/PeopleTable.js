import logo from "./logo.svg";
import "./App.css";

function PeopleTable() {
  const people = [
    { name: "Le NGoc", age: 25, occupation: "Student" },
    { name: "NGOC NGOC", age: 30, occupation: "Designer" },
    { name: "LE LE", age: 35, occupation: "Teacher" },
  ];

  return (
    <div>
      <h2>People Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;

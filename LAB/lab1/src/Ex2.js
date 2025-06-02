import logo from "./logo.svg";
import "./App.css";

function Ex2() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  return (
    <ul>
      <h1>
        <strong>Ex2</strong>
      </h1>

      {employees.map((emp, index) => (
        <li key={emp.id || index}>
          {" "}
          Name: {emp.name} - Department: {emp.department} - Age: {emp.age}
        </li>
      ))}
    </ul>
  );
}

export default Ex2;

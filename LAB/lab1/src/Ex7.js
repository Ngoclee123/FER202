import logo from "./logo.svg";
import "./App.css";

function Ex7() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  const sortedEmployees = [...employees].sort(
    (a, b) =>
      a.department.localeCompare(b.department) || a.name.localeCompare(b.name)
  );

  return (
    <div>
      <h1>
        <strong>Ex7</strong>
      </h1>
      <ul>
        {sortedEmployees.map((emp, index) => (
          <li key={emp.id || index}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ex7;

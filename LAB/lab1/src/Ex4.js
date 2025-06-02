import logo from "./logo.svg";
import "./App.css";

function Ex4() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  const averageAge = (...ages) =>
    ages.length ? ages.reduce((sum, age) => sum + age, 0) / ages.length : 0;

  const ages = employees.map((emp) => emp.age);
  const avg = averageAge(...ages).toFixed(1);

  return (
    <div>
      <h1>
        <strong>Ex4</strong>
      </h1>
      <p>Average Age: {avg}</p>
    </div>
  );
}

export default Ex4;

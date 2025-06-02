import { useState } from "react";

export default function Exercise10() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>
        <strong>Ex10</strong>
      </h1>
      <input
        type="text"
        placeholder="Search employee by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredEmployees.map((emp, index) => (
          <li key={emp.id || `${emp.name}-${emp.department}`}>
            {emp.name} - {emp.department} - {emp.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

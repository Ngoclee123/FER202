import logo from "./logo.svg";
import "./App.css";

function Ex3() {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    border: "2px solid #000",
  };

  const cellStyle = {
    border: "1px solid #000",
    padding: "8px",
    textAlign: "left",
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  };
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];
  return (
    <div>
      <h1>
        <strong>Ex3</strong>
      </h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id || index}>
              <td style={cellStyle}>{emp.id || index + 1}</td>
              <td style={cellStyle}>{emp.name}</td>
              <td style={cellStyle}>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ex3;

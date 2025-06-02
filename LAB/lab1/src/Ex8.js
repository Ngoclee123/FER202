const Ex8 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  const grouped = employees.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] || [];
    acc[emp.department].push(emp);
    return acc;
  }, {});

  return (
    <div>
      <h1>
        <strong>Ex8</strong>
      </h1>
      {Object.keys(grouped).map((dept) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {grouped[dept].map((emp, index) => (
              <li key={emp.id || index}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Ex8;

import "./App.css";

function SortedPeopleByOccupation() {
  const people = [
    { name: "Le Ngoc", age: 21, occupation: "Student" },
    { name: "Ngoc Le", age: 29, occupation: "Teacher" },
    { name: "Le Le", age: 16, occupation: "Student" },
  ];

  // Sắp xếp theo occupation (A-Z)
  const sortedbyOccupation = [...people].sort((a, b) =>
    a.occupation.localeCompare(b.occupation)
  );
  const sortedbyAge = [...people].sort((a, b) => a.age - b.age);
  return (
    <div className="">
      <h2>Sorted People (by Occupation)</h2>
      {sortedbyOccupation.length > 0 ? (
        <ul>
          {sortedbyOccupation.map((person, index) => (
            <li key={index}>
              <p>
                <strong>Name:</strong> {person.name}
              </p>
              <p>
                <strong>Age:</strong> {person.age}
              </p>
              <p>
                <strong>Occupation:</strong> {person.occupation}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No people to display</p>
      )}

      <h2>Sorted People (by Age)</h2>
      {sortedbyAge.length > 0 ? (
        <ul>
          {sortedbyAge.map((person, index) => (
            <li key={index}>
              <p>
                <strong>Name:</strong> {person.name}
              </p>
              <p>
                <strong>Age:</strong> {person.age}
              </p>
              <p>
                <strong>Occupation:</strong> {person.occupation}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No people to display</p>
      )}
    </div>
  );
}

export default SortedPeopleByOccupation;

import "./App.css";

function FirstTeenager() {
  const people = [
    { Name: "Le Ngoc", Age: 21, Occupation: "Student" },
    { Name: "Ngoc Le", Age: 29, Occupation: "Teacher" },
    { Name: "Le Le", Age: 16, Occupation: "Student" },
  ];

  const findFirstTNG = people.find(
    (person) => person.Age >= 13 && person.Age <= 19
  );

  return (
    <div className="firstTeenager">
      <h2>First Teenager</h2>
      {findFirstTNG ? (
        <div>
          <p>
            <strong>Name:</strong> {findFirstTNG.Name}
          </p>
          <p>
            <strong>Age:</strong> {findFirstTNG.Age}
          </p>
          <p>
            <strong>Occupation:</strong> {findFirstTNG.Occupation}
          </p>
        </div>
      ) : (
        <p>No teenager found</p>
      )}
    </div>
  );
}

export default FirstTeenager;

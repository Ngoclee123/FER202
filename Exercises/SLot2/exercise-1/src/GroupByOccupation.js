function GroupByOccupation() {
  const people = [
    { name: "Le Ngoc", age: 21, occupation: "Student" },
    { name: "Ngoc Le", age: 29, occupation: "Teacher" },
    { name: "Le Le", age: 16, occupation: "Student" },
  ];

  const occupations = [];
  for (let person of people) {
    if (!occupations.includes(person.occupation)) {
      occupations.push(person.occupation);
    }
  }

  return (
    <div>
      <h2>Group by Occupation</h2>
      {occupations.map((occupation, index) => (
        <div key={index}>
          <p>
            <strong>{occupation}:</strong>
          </p>
          {people
            .filter((person) => person.occupation === occupation)
            .map((person, i) => (
              <p key={i}>- {person.name}</p>
            ))}
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;

function OldestYoungest() {
  const people = [
    { name: "Le Ngoc", age: 21, occupation: "Student" },
    { name: "Ngoc Le", age: 29, occupation: "Teacher" },
    { name: "Le Le", age: 16, occupation: "Student" },
  ];

  if (people.length === 0) {
    return (
      <div>
        <h2>Oldest and Youngest</h2>
        <p>No people</p>
      </div>
    );
  }

  let oldest = people[0];
  let youngest = people[0];

  for (let person of people) {
    if (person.age > oldest.age) {
      oldest = person;
    }
    if (person.age < youngest.age) {
      youngest = person;
    }
  }

  return (
    <div>
      <h2>Oldest and Youngest</h2>
      <p>
        Oldest: {oldest.name} ({oldest.age})
      </p>
      <p>
        Youngest: {youngest.name} ({youngest.age})
      </p>
    </div>
  );
}

export default OldestYoungest;

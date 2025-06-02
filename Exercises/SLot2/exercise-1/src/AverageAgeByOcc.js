function AverageAgeByOccupation() {
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

  const averages = {};
  for (let occupation of occupations) {
    const group = people.filter((person) => person.occupation === occupation);
    let totalAge = 0;
    for (let person of group) {
      totalAge += person.age;
    }
    averages[occupation] = totalAge / group.length;
  }

  return (
    <div>
      <h2>Average Age</h2>
      {occupations.map((occupation, index) => (
        <p key={index}>
          {occupation}: {averages[occupation]}
        </p>
      ))}
    </div>
  );
}

export default AverageAgeByOccupation;

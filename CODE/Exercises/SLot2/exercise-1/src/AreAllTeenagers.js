import logo from "./logo.svg";
import "./App.css";

function AreAllTeenagers() {
  const people = [
    { Name: "Le Ngoc", Age: 18, Occupation: "Student" },
    { Name: "Ngoc Le", Age: 19, Occupation: "Teacher" },
    { Name: "Le Le", Age: 16, Occupation: "Student" },
  ];

  const areAllTeenagers = people.every((age) => age.Age >= 13 && age.Age <= 19);
  return areAllTeenagers ? (
    <h2>All of people is teenagers</h2>
  ) : (
    <h2>All of people is not teenagers</h2>
  );
}

export default AreAllTeenagers;

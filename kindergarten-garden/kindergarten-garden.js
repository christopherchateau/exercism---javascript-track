export class Garden {
  constructor(diagram, students = defaultRoster) {
    this.diagram = diagram.split("\n");
    this.students = students.sort();
    this.students.forEach((student, ind) => {
      this[student.toLowerCase()] = getStudentPlants(this.diagram, ind);
    });
  }
}

const getStudentPlants = (diagram, ind) => {
  ind *= 2;
  const plants = [
    diagram[0][ind],
    diagram[0][ind + 1],
    diagram[1][ind],
    diagram[1][ind + 1]
  ];
  return plants.map(plantId => plantNames[plantId]);
};

const plantNames = {
  R: "radishes",
  C: "clover",
  V: "violets",
  G: "grass"
};

const defaultRoster = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry"
];

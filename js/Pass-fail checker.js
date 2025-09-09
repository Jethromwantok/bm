function checkPassFail(student) {
  const passingScore = 50;
  return student.score >= passingScore? `${student.name} has passed.`: `${student.name} has failed.`;
}

// Example student object
const student1 = {
  name: "John Doe",
  age: 20,
  score: 75
};

console.log(checkPassFail(student1));


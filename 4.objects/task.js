let student1 = new Student("Иван", "male", 21);
let student2 = new Student("Вася", "male", 24);

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
    this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  marks.forEach(element => this.addMark(element))
}
  
Student.prototype.getAverage = function () {
  let sum = 0;
  for (mark of this.marks) {
    sum += mark;
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
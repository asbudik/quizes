var Person = function(name, height, age) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.sleeping = false;
}

var Student = function() {
  Person.apply(this, arguments)
  this.study = true;
}

var inherit = function(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
}

Person.prototype.eat = function() {
  return "eating"
}

Person.prototype.sleep = function() {
  if (this.sleeping === false) {
    this.sleeping = true
    return "has fell asleep";
  } else {
    return "this person is already asleep";
  }
}

Person.prototype.wake = function() {
  if (this.sleeping === true) {
    this.sleeping = false
    return "has woken up";
  } else {
    return "this person is already awake";
  }
}

inherit(Student, Person)

Student.prototype.startStudy = function() {
  if (this.study === false) {
    this.study = false
    return "this student has started studying";
  } else {
    return "this student is already studying";
  }
}

Student.prototype.stopStudy = function() {
  if (this.study === true) {
    this.study = false
    return "this student has stopped studying";
  } else {
    return "this student is not studying";
  }
}

Student.prototype.sleep = function() {
  if (this.sleeping === false && this.study === false) {
    this.sleeping = true;
    return "this student is asleep"
  } else if (this.study === true) {
    return "this student is studying";
  } else {
    return "student is asleep already"
  }
}
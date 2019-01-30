class Person {
  constructor(name = 'anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription()
    if (this.hasMajor()) {
      description += ` He study in ${this.major}`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age)
    this.homeLocation = homeLocation
  }
  hasHomeTown() {
    return !!this.homeLocation
  }
  getGreeting() {
    let description = super.getGretting()
    if (this.hasHomeTown()) {
      description += ` I am from ${this.homeLocation}`
    }
    return description
  }
}

const me = new Student('Aurelien Roux', 37, 'javascript');
console.log(me);
console.log(me.getDescription());

const other = new Student()
console.log(other);
console.log(other.getDescription());

const traveler = new Traveler('David', 49, 'France')
console.log(traveler);
console.log(traveler.getGreeting());

const travelerTwo = new Traveler('Adrien', 6)
console.log(travelerTwo);
console.log(travelerTwo.getGreeting());

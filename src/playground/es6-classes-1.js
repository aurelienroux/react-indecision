
class Person {
  constructor(name = 'anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
     return `Hi ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

const me = new Person('Aurelien Roux', 37);
console.log(me);

const other = new Person()
console.log(other);

console.log(me.getGretting());
console.log(me.getDescription());
console.log(other.getGretting());
console.log(other.getDescription());

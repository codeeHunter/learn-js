// Пример функции-конструктора, с которой такой вызов корректно сработает:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("John", 30);
let person2 = new person1.constructor("Bob", 25);

console.log(person2 instanceof Person); // true
console.log(person2.name); // "Bob"
console.log(person2.age); // 25

// Пример функции-конструктора, с которой такой код поведёт себя неправильно:

function Animal(type) {
  this.type = type;
}

let animal1 = new Animal("Dog");
let animal2 = new animal1.constructor("Cat");

console.log(animal2 instanceof Animal); // false
console.log(animal2.type); // undefined

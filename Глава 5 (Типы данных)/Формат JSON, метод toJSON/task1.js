// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

const user = {
  name: "Василий Иванович",
  age: 35,
};

const userParse = JSON.parse(JSON.stringify(user));

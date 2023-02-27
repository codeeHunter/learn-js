// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
  firstNumber: 0,
  secondNumber: 0,

  // Здесь я сделал чтобы пользователь сам вписывал,
  // так как мы работаем с нодой, а не с вебом(На вебе можно запрашивать значение через prompt).

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read(3, 4);
console.log(calculator.sum());
console.log(calculator.mul());

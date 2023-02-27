let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumSalaries = (object) => {
  let sum = 0;

  for (let salary in object) {
    sum += object[salary];
  }

  return sum;
};

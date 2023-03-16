const sumTo1 = (num) => {
  let count = 0;

  for (let i = 0; i < num; i++) {
    count += i;
  }

  return num;
};

const sumTo2 = (num) => {
  if (num == 1) return 1;
  return num + sumTo2(n - 1);
};

const sumTo3 = (num) => {
  return (n * (n + 1)) / 2;
};

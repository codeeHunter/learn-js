let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (someObject) => {
  for (let key in someObject) {
    if (typeof someObject[key] == "number") {
      someObject[key] *= 2;
    }
  }
};

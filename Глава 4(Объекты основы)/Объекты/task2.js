let schedule = {};

const isEmpty = (object) => {
  for (let key in schedule) return false;
  return true;
};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

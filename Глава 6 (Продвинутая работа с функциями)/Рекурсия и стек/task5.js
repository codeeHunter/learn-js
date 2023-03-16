const printReverseList1 = (list) => {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

const printReverseList2 = (list) => {
  if (list.next) {
    printReverseList2(list.next);
  }

  console.log(list.value);
};

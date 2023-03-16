const printList = (list) => {
  let temp = list;

  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
};

const printList1 = (list) => {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
};

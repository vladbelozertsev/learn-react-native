// console.log выводит уже готовый массив (т.е. в обеих логах {id:555}), даже в 'a before edit'
const a = [{ id: 1 }, { id: 2 }, { id: 3 }];
const editA = (toFind) => {
  console.log('a before edit - ', a);
  const idFind = a.find((obj) => obj.id === toFind);
  if (idFind) {
    idFind.id = 555;
    console.log('a after edit - ', a);
  }
};
editA(3);

// console.log выводит результат поочередно, сначало 3 -> 555
const b = [1, 2, 3];
const editB = (toFind) => {
  console.log('b before edit - ', b);
  const idFind = b.find((id) => id === toFind);
  if (idFind) {
    b[2] = 555;
    console.log('b after edit - ', b);
  }
};
editB(3);

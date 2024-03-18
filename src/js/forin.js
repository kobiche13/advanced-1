export default function sortObj(obj, sortValue) {
  const sortArrСondition = [];
  const sortArrAlphabet = [];
  for (const prop in obj) {
    const pushObj = {};
    pushObj.key = prop;
    pushObj.value = obj[prop];
    if (pushObj.key === sortValue[0]) {
      sortArrСondition.unshift(pushObj);
    } else if (pushObj.key === sortValue[1]) {
      sortArrСondition.push(pushObj);
    } else {
      sortArrAlphabet.push(pushObj);
    }
  }
  sortArrAlphabet.sort((a, b) => {
    const x = a.key.toLowerCase();
    const y = b.key.toLowerCase();
    return x < y ? -1 : 1;
  });
  const resultArr = sortArrСondition.concat(sortArrAlphabet);
  return resultArr;
}

let arr = ["1 2 3 4 5"].toString();

function createNewArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  newArray;
  return newArray.join("");
}
console.log(createNewArray(arr));

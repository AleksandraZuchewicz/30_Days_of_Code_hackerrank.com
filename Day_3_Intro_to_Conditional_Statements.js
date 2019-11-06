function isEven(n) {
  return n % 2 == 0;
}

function checkCondition(n) {
  if (isEven(n) && n >= 2 && n <= 5) {
    return "Now Wierd";
  } else if (isEven(n) && (n >= 6 && n < 20)) {
    return "Wierd";
  } else if (isEven(n) && n >= 20) {
    return "Now Wierd";
  } else if (!isEven(n)) {
    return "Wierd";
  }
}

for (let i = 1; i < 25; i++) {
  console.log(checkCondition(i));
}

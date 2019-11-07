const s = "Aleksandra";

function oddOrEven(s) {
  if (typeof s == "string") {
    let sArray = s.split("");
    let arrayEven = [];
    let arrayOdd = [];

    for (let i = 0; i < sArray.length; i++) {
      if (i % 2 == 0) {
        arrayEven.push(sArray[i]);
      } else {
        arrayOdd.push(sArray[i]);
      }
    }
    let ev = arrayEven.toString("").replace(/,/g, "");
    let odd = arrayOdd.toString("").replace(/,/g, "");
    console.log(ev + " " + odd);
    //console.log(odd);
  } else {
    console.log("Its not a string");
  }
}

oddOrEven(s);

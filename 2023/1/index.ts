import data from "./data.json";

type myArray = Array<Array<string>>;
const manipulatedData: myArray = [];

for (const [key, value] of Object.entries(data)) {
  const numberKey = parseInt(key);
  manipulatedData[numberKey] = [];

  for (let digit of value) {
    if (parseInt(digit)) {
      manipulatedData[numberKey].push(digit);
    }
  }
}

let counter = 0;
manipulatedData.forEach(element => {
  const length = element.length - 1;
  counter += +(element[0] + element[length]);
});

console.log(counter);
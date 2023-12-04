import data from "./data.json";

type myArray = Array<Array<string>>;
const manipulatedData: myArray = [];

const stringDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function replaceNumberStringToNumber(value: string) {
  let tempValue = '';

  for (const [index, number] of Object.entries(stringDigits)) {
    tempValue += value.replace(number, digits[+index]);
  }

  return tempValue;
}

for (const [key, value] of Object.entries(data)) {
  const numberKey = parseInt(key);
  manipulatedData[numberKey] = [];

  const formattedValue = replaceNumberStringToNumber(value);
  for (let digit of formattedValue) {
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
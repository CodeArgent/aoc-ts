import data from "./data.json";

type objectArray = Array<{ "pos": number, "digit": string }>
type myArray = Array<Array<string>>;

const manipulatedData: myArray = [];

const stringDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function formatDigitStringToNumber(digit: string) {
  const tempDigitIndex = stringDigits.indexOf(digit);

  if (-1 === tempDigitIndex) {
    return digit;
  }

  return digits[tempDigitIndex];
}

for (const [key, value] of Object.entries(data)) {
  const tempData: objectArray = [];
  for (const digit of digits.concat(stringDigits)) {
    let tempDigit = digit;
    const digitPos = value.indexOf(tempDigit);

    if (-1 === digitPos) {
      continue;
    }

    tempData.push({
      "pos": digitPos,
      "digit": tempDigit
    });
  }

  if (0 !== tempData.length) {
    tempData.sort((a, b) => a.pos - b.pos);
    const length = tempData.length - 1;

    let tempFirstElement = formatDigitStringToNumber(tempData[0].digit);
    let tempLastElement = formatDigitStringToNumber(tempData[length].digit);

    manipulatedData[+key] = [tempFirstElement, tempLastElement];
  }
}

let counter = 0;
manipulatedData.forEach(element => {
  counter += +(element[0] + element[1]);
});

console.log(counter);
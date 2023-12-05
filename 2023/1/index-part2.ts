import data from "./data.json";

type objectArray = Array<{ "pos": number, "digit": string }>
type myArray = Array<Array<string>>;
const manipulatedData: myArray = [];

const stringDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function replaceNumberStringToNumber(value: string) {
  let tempData: objectArray = []
  for (const [index, number] of Object.entries(digits.concat(stringDigits))) {
    let position = value.indexOf(number);

    while (-1 !== position) {
      const numberIndex = parseInt(index);

      tempData.push({
        "pos": position,
        "digit": numberIndex > 10 ? digits[numberIndex - 10] : number
      });

      position = value.indexOf(number, ++position);
    }
  }

  if (0 !== tempData.length) {
    tempData = tempData.sort((a, b) => a.pos - b.pos);
    if (value === 'plckgsixeight6eight95bnrfonetwonej') {
      console.log(tempData);
    }
    const length = tempData.length - 1;

    return [tempData[0].digit, tempData[length].digit];
  }

  return [];
}

for (const [key, value] of Object.entries(data)) {
  const numberKey = parseInt(key);

  const formattedValue = replaceNumberStringToNumber(value);

  if (0 !== formattedValue.length) {
    manipulatedData[numberKey] = [];
    manipulatedData[numberKey].push(...formattedValue);
  }
}

let counter = 0;
manipulatedData.forEach(element => {
  const length = element.length - 1;
  counter += +(element[0] + element[length]);
});

console.log(counter);
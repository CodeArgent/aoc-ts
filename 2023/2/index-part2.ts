import data from "./data.json";

let result = 0;

for (const [_, value] of Object.entries(data)) {
  const values = value.split(';');

  const colorsMaxValue = {
    red: 1,
    green: 1,
    blue: 1,
  };

  for (const hand of values) {
    const colors = hand.split(',');

    for (const color of colors) {
      let colorNumber: number;

      switch (true) {
        case color.endsWith('red'):
          colorNumber = parseInt(color.replace('red', '').trim());
          if (colorsMaxValue.red < colorNumber) {
            colorsMaxValue.red = colorNumber;
          }
          break;
        case color.endsWith('green'):
          colorNumber = parseInt(color.replace('green', '').trim());
          if (colorsMaxValue.green < colorNumber) {
            colorsMaxValue.green = colorNumber;
          }
          break;
        case color.endsWith('blue'):
          colorNumber = parseInt(color.replace('blue', '').trim());
          if (colorsMaxValue.blue < colorNumber) {
            colorsMaxValue.blue = colorNumber;
          }
          break;
      }
    }
  }

  result += (colorsMaxValue.red * colorsMaxValue.green * colorsMaxValue.blue);
}

console.log(result);
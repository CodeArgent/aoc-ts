import data from "./data.json";

let gamesIdCounter = 0;

for (const [key, value] of Object.entries(data)) {
  const gameId = parseInt(key.replace('Game ', ''));

  const values = value.split(';');

  const colorsState = {
    red: true,
    green: true,
    blue: true
  };

  for (const hand of values) {
    const colors = hand.split(',');

    for (const color of colors) {
      switch (true) {
        case color.endsWith('red'):
          if (12 < parseInt(color.replace('red', '').trim())) {
            colorsState.red = false;
          }
          break;
        case color.endsWith('green'):
          if (13 < parseInt(color.replace('green', '').trim())) {
            colorsState.green = false;
          }
          break;
        case color.endsWith('blue'):
          if (14 < parseInt(color.replace('blue', '').trim())) {
            colorsState.blue = false;
          }
          break;
      }
    }
  }

  if (colorsState.red && colorsState.green && colorsState.blue) {
    gamesIdCounter += gameId;
  }
}

console.log(gamesIdCounter);
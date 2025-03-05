export const getRandomSelection = (items = {}) => {
  const keys = Object.keys(items);
  const maxLength = keys.length;
  const key = getRandomInt(maxLength) - 1;
  return items[keys[key]];
};

export const getRandomInt = (max = 8, min = 1) => {
  if (min === 1 && max === 1) {
    return 1;
  }

  return Math.floor(Math.random() * (max - min + 1) + min); // max and min inclusive
};

export const getRandomLetter = () => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const index = getRandomInt(letters.length) - 1;
  return letters[index];
};

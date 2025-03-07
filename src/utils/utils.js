export const getRandomArraySelection = (items = []) => {
  const maxLength = items.length;
  const key = getRandomInt(maxLength) - 1;
  return items[key];
};

export const getRandomObjectSelection = (items = {}) => {
  const keys = Object.keys(items);
  const maxLength = keys.length;
  const key = getRandomInt(maxLength) - 1;
  return {
    key: keys[key],
    ...items[keys[key]],
  };
};

export const getRandomInt = (max = 8, min = 1) => {
  if (min === 1 && max === 1) {
    return 1;
  }

  return Math.floor(Math.random() * (max - min + 1) + min); // max and min inclusive
};

export const getOrdinal = (n) => {
  let ord = "th";

  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }

  return `${n}${ord}`;
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

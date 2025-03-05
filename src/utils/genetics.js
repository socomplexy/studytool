import { getRandomInt, getRandomLetter } from "./utils";

const randomCase = (letter) => {
  const options = [letter.toUpperCase(), letter.toLowerCase()];
  return options[getRandomInt(1, 0)];
};

export const getPunnettSquare = (data) => {
  const letter = data?.motherAllele[0] || getRandomLetter();
  const mother =
    data?.motherAllele ||
    [randomCase(letter), randomCase(letter)].sort().join("");
  const father =
    data?.fatherAllele ||
    [randomCase(letter), randomCase(letter)].sort().join("");

  return {
    mother,
    father,
    combinations: [
      `${mother[0]}${father[0]}`,
      `${mother[0]}${father[1]}`,
      `${mother[1]}${father[0]}`,
      `${mother[1]}${father[1]}`,
    ],
  };
};

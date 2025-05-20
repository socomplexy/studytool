import { Utils } from "../../../utils";

const getRandomAnimal = () => {
  const animals = [
    "reindeer",
    "pine marten",
    "cuckoo",
    "feral cat",
    "Mexican redknee tarantula",
  ];
  const result = Utils.getRandomArraySelection(animals);
  return result;
};

const getRandomQuestion = (initialValue, finalValue) => {
  const animal = getRandomAnimal();
  const options = [
    `A potato cylinder is weighed before and after being placed in a solution for 24 hours. Initially, it weighed ${initialValue} mg, but after osmosis occurs, it weighed ${finalValue} mg. Calculate the percentage change in mass of the potato cylinder.`,
    `A population of ${animal} was recorded at ${initialValue} in 2020. By 2025, the population had changed to ${finalValue}. Calculate the percentage change in the ${animal} population over this 5-year period.`,
    `In an enzyme activity experiment, the rate of reaction at pH7 was measured at ${initialValue} units/min, but when the pH changed to 4, the rate changed to ${finalValue} units/min. Calculate the percentage change in enzyme activity when the pH was changed from 7 to 4.`,
  ];
  const result = Utils.getRandomArraySelection(options);
  return result;
};

export const generateData = () => {
  const initialValue = Utils.getRandomInt(1000);
  const finalValue = Utils.getRandomInt(1000);
  const answer = Math.round(((finalValue - initialValue) / initialValue) * 100);
  let result = {
    initialValue,
    finalValue,
    answer,
    question: getRandomQuestion(initialValue, finalValue),
    type: answer < 0 ? "decrease" : "increase",
    explanation: `To solve, we want to subtract the old value (${initialValue}) from the latest/final value (${finalValue}), then divide by the old value (${initialValue}) and multiply by 100. That would look like: (${finalValue} - ${initialValue}) / ${initialValue} * 100`,
  };

  return result;
};

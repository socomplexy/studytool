import { decayRates } from "./data";
import { Utils } from "../../utils";

const getStartingWeight = () => Utils.getRandomInt(500, 10);

const getRandomIsotope = (key) =>
  Utils.getRandomArraySelection(decayRates[key]);

const getRandomPeriod = () => Utils.getRandomObjectSelection(decayRates).key;

const getDataPoint = ({ startingWeight, halfLife, timePassed }) => {
  const currentHalfLife = timePassed / halfLife;
  const currentAmount = startingWeight * 0.5 ** currentHalfLife;
  return { x: timePassed, y: currentAmount };
};

export const populateDataset = () => {
  const timeValue = getRandomPeriod();
  const isotope = getRandomIsotope(timeValue);
  const halfLife = isotope.halfLife;
  const startingWeight = getStartingWeight();
  const activity = 1;
  //   number of decays/time in seconds

  let result = [{ x: 0, y: startingWeight }];

  for (let index = 0; index < halfLife * 4; index += 0.1) {
    const timePassed = halfLife * index;
    const dataPoint = getDataPoint({
      startingWeight,
      halfLife,
      timePassed,
    });

    dataPoint.y >= startingWeight / 500 && result.push(dataPoint);
  }
  return { activity, isotope, startingWeight, timeValue, dataset: result };
};

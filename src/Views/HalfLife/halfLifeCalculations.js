import { decayRates } from "./data";
import { Utils } from "../../utils";

const getStartingActivity = () =>
  (Math.round(Utils.getRandomInt(1000000, 10000) / 100) * 100) / 1000;

const getRandomIsotope = (key) =>
  Utils.getRandomArraySelection(decayRates[key]);

const getRandomPeriod = () => Utils.getRandomObjectSelection(decayRates).key;

const getDataPoint = ({ startingActivity, halfLife, timePassed }) => {
  const currentHalfLife = timePassed / halfLife;
  const currentAmount = startingActivity * 0.5 ** currentHalfLife;
  return { x: timePassed, y: currentAmount };
};

export const populateDataset = () => {
  const timeValue = getRandomPeriod();
  const isotope = getRandomIsotope(timeValue);
  const halfLife = isotope.halfLife;
  const startingActivity = getStartingActivity();

  let result = [{ x: 0, y: startingActivity }];

  for (let index = 0; index < halfLife * 4; index += 0.1) {
    const timePassed = halfLife * index;
    const dataPoint = getDataPoint({
      startingActivity,
      halfLife,
      timePassed,
    });

    dataPoint.y >= startingActivity / 500 && result.push(dataPoint);
  }
  return { isotope, startingActivity, timeValue, dataset: result };
};

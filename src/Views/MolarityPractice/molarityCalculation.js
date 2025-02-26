import { Utils } from "../../utils";

const units = {
  concentration: "M",
  mass: "g",
  gfm: "g",
  moles: "moles",
  volume: "L",
  volumeMils: "mL",
};

export const simpleConversion = () => {
  const substance = Utils.getRandomSelection(Utils.substances);
  const mass = parseFloat((Utils.getRandomInt(1000) / 10).toFixed(4));
  const moles = parseFloat((mass / substance.atomicMass.total).toFixed(4));
  const volume = Utils.getRandomInt(50) / 10;
  const volumeMils = volume < 1 ? volume * 1000 : null;
  const concentration = parseFloat((moles / volume).toFixed(4));
  const gfm = substance.atomicMass.total;

  const result = {
    substance,
    mass,
    moles,
    volume,
    volumeMils,
    concentration,
    gfm,
    question: `How many moles are there in ${mass} grams of ${substance.name} (${substance.displayKey})?`,
    hint: `The formula mass for ${substance.displayKey} is ${substance.atomicMass.total}.`,
    answer: `${moles} moles (to 2 d.p.)`,
    explanation: `To find the number of moles, we must divide the substance weight by the atomic mass. In this case, that gives us ${mass} / ${substance.atomicMass.total} = ${moles} moles.`,
  };

  return result;
};

const formatVolume = (vol) =>
  vol < 1 ? `${vol * 1000} ${units.volumeMils}` : `${vol} ${units.volume}`;

const getAdvancedExplanation = ({
  randomNeeded,
  firstProvidedInfo,
  secondProvidedInfo,
  calculation,
}) => {
  let result = "";
  if (randomNeeded === "mass") {
    result = `<ol>
      <li>First we need to rearrange the equation <strong>n=m/GFM</strong> for mass to <strong>m=n*GFM</strong>, where m=mass, n=number of moles and GFM is Gram Formula Mass.</li>
      <li>We know the Gram Formula Mass for ${calculation.substance.displayKey} is ${calculation.gfm} ${units.gfm}, so let substitute in for what we know, giving us <strong>m = ${calculation[firstProvidedInfo]} * ${calculation.gfm} = ${calculation[randomNeeded]} ${units[randomNeeded]}</strong>.</li>
      </ol>`;
  } else if (randomNeeded === "moles") {
    result = `<ol>
      <li>We will use the equation <strong>n=m/GFM</strong>, where m=mass, n=number of moles and GFM is Gram Formula Mass.</li>
      <li>We know the Gram Formula Mass for ${calculation.substance.displayKey} is ${calculation.gfm} ${units.gfm}, so let substitute in for what we know, giving us <strong>n = ${calculation[firstProvidedInfo]} / ${calculation.gfm} = ${calculation[randomNeeded]} ${units[randomNeeded]}</strong>.</li>
      </ol>`;
  } else if (randomNeeded === "concentration") {
    const stringContent =
      firstProvidedInfo === "moles"
        ? `<li>We will use the equation <strong>C=n/V</strong>, where C=concentration, n=number of moles and V=volume.</li>
    <li>We then substitute in for what we know, giving us <strong>C = ${calculation[firstProvidedInfo]} / ${calculation[secondProvidedInfo]} = ${calculation[randomNeeded]} ${units[randomNeeded]}</strong>.</li>`
        : `<li>To calculate concentration, we need to use the equation <strong>C=n/V</strong>, where C=concentration, n=number of moles and V=volume. We have volume, but we don't have the number of moles yet.</li>
    <li>Instead, we will need to first use <strong>n=m/GFM</strong>, where m=mass, n=number of moles and GFM is Gram Formula Mass to get that information.</li>
    <li>We know the Gram Formula Mass for ${calculation.substance.displayKey} is ${calculation.gfm} ${units.gfm}, so let substitute in for what we know, giving us <strong>n = ${calculation[firstProvidedInfo]} / ${calculation.gfm} = ${calculation.moles} ${units.moles}</strong>.</li>
    <li>Now that we have the number of moles, will use the equation <strong>C=n/V</strong>, and we can now substitute in for what we know, giving us <strong>C = ${calculation.moles} / ${calculation[secondProvidedInfo]} = ${calculation[randomNeeded]} ${units[randomNeeded]}</strong>.</li>`;

    result = `<ol>${stringContent}</ol>`;
  } else if (randomNeeded === "volume") {
    const stringContent =
      firstProvidedInfo === "moles"
        ? `<li>We will use the equation <strong>C=n/V</strong>, rearranged to <strong>V=n/C</strong>, where C=concentration, n=number of moles and V=volume.</li>
    <li>We then substitute in for what we know, giving us <strong>V = ${
      calculation[firstProvidedInfo]
    } / ${calculation[secondProvidedInfo]} = ${formatVolume(
            calculation[randomNeeded]
          )}</strong>.</li>`
        : `<li>To calculate volume, we need to use the equation <strong>C=n/V</strong>, rearranged to <strong>V=n/C</strong>, where C=concentration, n=number of moles and V=volume. We have the concentration, but we don't have the number of moles yet.</li>
    <li>Instead, we will need to first use <strong>n=m/GFM</strong>, where m=mass, n=number of moles and GFM is Gram Formula Mass to get that information.</li>
    <li>We know the Gram Formula Mass for ${
      calculation.substance.displayKey
    } is ${calculation.gfm} ${
            units.gfm
          }, so let substitute in for what we know, giving us <strong>n = ${
            calculation[firstProvidedInfo]
          } / ${calculation.gfm} = ${calculation.moles} ${
            units.moles
          }</strong>.</li>
    <li>Now that we have the number of moles, will use the equation <strong>V=n/C</strong>, and we can now substitute in for what we know, giving us <strong>V = ${
      calculation.moles
    } / ${calculation[secondProvidedInfo]} = ${formatVolume(
            calculation[randomNeeded]
          )}</strong>.</li>`;

    result = `<ol>${stringContent}</ol>`;
  }

  return result;
};

export const advancedConversion = (calculation) => {
  // Because we can get GFM ourselves, we need either n or m to complete n=mass/GFM
  const firstOptions = ["mass", "moles"];
  const firstProvidedInfo = firstOptions[Utils.getRandomInt(1, 0)];

  // Because we now have n, we need either c or v to complete C=n/V
  const secondOptions = ["volume", "concentration"];
  const secondProvidedInfo = secondOptions[Utils.getRandomInt(1, 0)];

  // Need to randomly choose between the missing information to be calculated
  const firstNeeded = secondOptions.find((o) => o !== secondProvidedInfo);
  const secondNeeded = firstOptions.find((o) => o !== firstProvidedInfo);
  const randomNum = Utils.getRandomInt(2, 1);
  const randomNeeded = randomNum === 1 ? firstNeeded : secondNeeded;

  const advancedQuestion = `Given ${calculation[firstProvidedInfo]} ${units[firstProvidedInfo]} of ${calculation.substance.displayKey}, calculate the ${randomNeeded} of ${calculation.substance.displayKey} when you have ${calculation[secondProvidedInfo]} ${units[secondProvidedInfo]}.`;
  const advancedHint = `The GFM for ${calculation.substance.displayKey} is ${calculation.gfm} ${units.gfm}.`;
  const advancedAnswer =
    randomNeeded === "volume"
      ? `${formatVolume(calculation[randomNeeded])}`
      : `${calculation[randomNeeded]} ${units[randomNeeded]}`;
  const advancedExplanation = getAdvancedExplanation({
    randomNeeded,
    firstProvidedInfo,
    secondProvidedInfo,
    calculation,
  });

  const result = {
    ...calculation,
    advancedQuestion,
    advancedHint,
    advancedAnswer,
    advancedExplanation,
  };

  return result;
};

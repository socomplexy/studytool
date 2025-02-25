import { Utils } from "../../utils";

export const simpleConversion = () => {
  const substance = Utils.getRandomSelection(Utils.substances);
  const mass = Utils.getRandomInt(10000) / 100;
  const moles = (mass / substance.atomicMass.total).toFixed(2);

  const result = {
    substance,
    mass,
    question: `How many moles are there in ${mass} grams of ${substance.name} (${substance.displayKey})?`,
    hint: `The atomic mass for ${substance.displayKey} is ${substance.atomicMass.total}.`,
    answer: `${moles} moles (to 2 d.p.)`,
    explanation: `To find the number of moles, we must divide the substance weight by the atomic mass. In this case, that0 gives us ${mass} / ${substance.atomicMass.total} = ${moles} moles.`,
  };

  return result;
};

// let concentration = { value: null, units: "M" };
// let numberMoles = { value: null, units: "moles" };
// let volume = { value: null, units: "L" };
// let substanceMass = { value: null, units: "g" };
// let gfm = { value: null, units: "g" };

// C=n/V, n=CV, V=n/C
// C = concentration, n = number of moles, V = volume in litres

// n = mass /GFM, mass = n*GFM, GFM = mass/n
// GFM is 1 mole

// example questions
// calculate the mass of carbon dioxide produced when 64 grams of methan is burned according to the following equation
//  ----- CH4 + 2O2 -> CO2 + 2H2O

// calculate the mass of carbon dixide produced when 49g of carbon is burned according to the following reaction:
//  ----- C + O2 -> CO2

// what volume of sodium hydroxide concentration 0.1M is required to neutralise 80cm3 of 0.2mol/l hydrochloric acid
//  ----- NaOH +Hcl -> NaCl +H2O

// What volume of potassium hydroxide concentration 0.2mol/l is required to neutralise 45cm3 of 0.1mol/l hydrochloric acid?
//  ----- KOH + HCl-> KCl +H2O

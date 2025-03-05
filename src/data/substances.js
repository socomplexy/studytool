import { getTotalMolecularMakeup } from "./elements";

export const substances = {
  AgNO3: {
    key: "AgNO3",
    displayKey: "AgNO<sub>3</sub>",
    name: "silver nitrate",
    ...getTotalMolecularMakeup([
      { symbol: "Ag", count: 1 },
      { symbol: "N", count: 1 },
      { symbol: "O", count: 3 },
    ]),
  },
  C6H12O6: {
    key: "C6H12O6",
    displayKey: "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
    name: "glucose",
    ...getTotalMolecularMakeup([
      { symbol: "C", count: 6 },
      { symbol: "H", count: 12 },
      { symbol: "O", count: 6 },
    ]),
  },
  CCl4: {
    key: "CCl4",
    displayKey: "CCl<sub>4</sub>",
    name: "carbon chloride",
    ...getTotalMolecularMakeup([
      { symbol: "C", count: 1 },
      { symbol: "Cl", count: 4 },
    ]),
  },
  CH4: {
    key: "CH4",
    displayKey: "CH<sub>4</sub>",
    name: "methane",
    ...getTotalMolecularMakeup([
      { symbol: "C", count: 1 },
      { symbol: "H", count: 4 },
    ]),
  },
  CO2: {
    key: "CO2",
    displayKey: "CO<sub>2</sub>",
    name: "carbon dioxide",
    ...getTotalMolecularMakeup([
      { symbol: "C", count: 1 },
      { symbol: "O", count: 2 },
    ]),
  },
  H2O: {
    key: "H2O",
    displayKey: "H<sub>2</sub>O",
    name: "water",
    ...getTotalMolecularMakeup([
      { symbol: "H", count: 2 },
      { symbol: "O", count: 1 },
    ]),
  },
  KCl: {
    key: "KCl",
    displayKey: "KCl",
    name: "potassium chloride",
    ...getTotalMolecularMakeup([
      { symbol: "K", count: 1 },
      { symbol: "Cl", count: 1 },
    ]),
  },
  KOH: {
    key: "KOH",
    displayKey: "KOH",
    name: "potassium hydroxide",
    ...getTotalMolecularMakeup([
      { symbol: "K", count: 1 },
      { symbol: "O", count: 1 },
      { symbol: "H", count: 1 },
    ]),
  },
  N2: {
    key: "N2",
    displayKey: "N<sub>2</sub>",
    name: "nitrogen",
    ...getTotalMolecularMakeup([{ symbol: "N", count: 2 }]),
  },
  NaCl: {
    key: "NaCl",
    displayKey: "NaCl",
    name: "hydrochloric acid",
    ...getTotalMolecularMakeup([
      { symbol: "Na", count: 1 },
      { symbol: "Cl", count: 1 },
    ]),
  },
  NaOH: {
    key: "NaOH",
    displayKey: "NaOH",
    name: "sodium hydroxide",
    ...getTotalMolecularMakeup([
      { symbol: "Na", count: 1 },
      { symbol: "O", count: 1 },
      { symbol: "H", count: 1 },
    ]),
  },
  O2: {
    key: "O2",
    displayKey: "O<sub>2</sub>",
    name: "oxygen",
    ...getTotalMolecularMakeup([{ symbol: "O", count: 2 }]),
  },
};

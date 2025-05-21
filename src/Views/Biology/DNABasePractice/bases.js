import { getRandomObjectSelection } from "../../../utils/utils";

const bases = {
  t: {
    name: "thymine",
    dnaPair: "a",
    rnaPair: null,
    symbol: "T",
  },
  a: {
    name: "adenine",
    dnaPair: "t",
    rnaPair: "u",
    symbol: "A",
  },
  g: {
    name: "guanine",
    dnaPair: "c",
    rnaPair: "c",
    symbol: "G",
  },
  c: {
    name: "cytosine",
    dnaPair: "g",
    rnaPair: "g",
    symbol: "C",
  },
  u: {
    name: "uracil",
    dnaPair: null,
    rnaPair: "a",
    symbol: "U",
  },
};

const generatePairData = ({ availableBases, isRNA }) => {
  const base = getRandomObjectSelection(availableBases);
  const pair = base[isRNA ? "rnaPair" : "dnaPair"];

  return {
    left: base,
    right: availableBases[pair],
  };
};

export const populateBasePairs = (type) => {
  let availableBases = { ...bases };
  const isRNA = type === "RNA";

  if (isRNA) {
    delete availableBases.t;
  } else {
    delete availableBases.u;
  }

  const result = [
    generatePairData({ availableBases, isRNA }),
    generatePairData({ availableBases, isRNA }),
    generatePairData({ availableBases, isRNA }),
    generatePairData({ availableBases, isRNA }),
    generatePairData({ availableBases, isRNA }),
    generatePairData({ availableBases, isRNA }),
    generatePairData({ availableBases, isRNA }),
    generatePairData({ availableBases, isRNA }),
    generatePairData({ availableBases, isRNA }),
    generatePairData({ availableBases, isRNA }),
  ];

  return result;
};

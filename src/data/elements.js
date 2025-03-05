export const elements = {
  H: {
    number: 1,
    atomicMass: 1,
    displayKey: "H",
    name: "hydrogen",
  },
  He: {
    number: 2,
    atomicMass: 4,
    displayKey: "He",
    name: "helium",
  },
  Li: {
    number: 3,
    atomicMass: 7,
    displayKey: "Li",
    name: "lithium",
  },
  Be: {
    number: 4,
    atomicMass: 9,
    displayKey: "Be",
    name: "beryllium",
  },
  B: {
    number: 5,
    atomicMass: 11,
    displayKey: "B",
    name: "boron",
  },
  C: {
    number: 6,
    atomicMass: 12,
    displayKey: "C",
    name: "carbon",
  },
  N: {
    number: 7,
    atomicMass: 14,
    displayKey: "N",
    name: "nitrogen",
  },
  O: {
    number: 8,
    atomicMass: 16,
    displayKey: "O",
    name: "oxygen",
  },
  F: {
    number: 9,
    atomicMass: 19,
    displayKey: "F",
    name: "flourine",
  },
  Ne: {
    number: 10,
    atomicMass: 20,
    displayKey: "Ne",
    name: "neon",
  },
  Na: {
    number: 11,
    atomicMass: 23,
    displayKey: "Na",
    name: "sodium",
  },
  Mg: {
    number: 12,
    atomicMass: 24,
    displayKey: "Mg",
    name: "magnesium",
  },
  Al: {
    number: 13,
    atomicMass: 27,
    displayKey: "Al",
    name: "aluminium",
  },
  Si: {
    number: 14,
    atomicMass: 28,
    displayKey: "Si",
    name: "silicon",
  },
  P: {
    number: 15,
    atomicMass: 31,
    displayKey: "P",
    name: "phosphorus",
  },
  S: {
    number: 16,
    atomicMass: 32,
    displayKey: "S",
    name: "sulphur",
  },
  Cl: {
    number: 17,
    atomicMass: 35,
    displayKey: "Cl",
    name: "chlorine",
  },
  Ar: {
    number: 18,
    atomicMass: 40,
    displayKey: "Ar",
    name: "argon",
  },
  K: {
    number: 19,
    atomicMass: 39,
    displayKey: "K",
    name: "potassium",
  },
  Ca: {
    number: 20,
    atomicMass: 40,
    displayKey: "Ca",
    name: "calcium",
  },
  Ag: {
    number: 47,
    atomicMass: 108,
    displayKey: "Ag",
    name: "silver",
  },
};

export const getTotalMolecularMakeup = (moleculeElements) => {
  if (moleculeElements) {
    let totalMass = 0;
    const els = moleculeElements.map((e) => {
      totalMass = totalMass + elements[e.symbol].atomicMass * [e.count];
      return e;
    });
    return { totalMass, elements: els };
  }

  return;
};

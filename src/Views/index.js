import { Chemistry } from "./Chemistry";
import { Biology } from "./Biology";
import { Physics } from "./Physics";
import { Home } from "./Home";

export const Views = {
  Home,

  // Biology
  Biology: Biology.Biology,
  DNABasePractice: Biology.DNABasePractice,

  // Chemistry
  Chemistry: Chemistry.Chemistry,
  Molarity: Chemistry.Molarity,
  MolarityPractice: Chemistry.MolarityPractice,
  UnderstandingMolarity: Chemistry.UnderstandingMolarity,

  // Physics
  Physics: Physics.Physics,
  HalfLife: Physics.HalfLife,

  // Maths
};

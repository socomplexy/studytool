import { Chemistry } from "./Chemistry";
import { Biology } from "./Biology";
import { Physics } from "./Physics";
import { Home } from "./Home";
import { ToolsIndex } from "./ToolsIndex";

export const Views = {
  "/": {
    active: true,
    banner: "home-banner",
    description: "",
    element: Home,
    path: "/",
    subject: null,
    title: "Home",
  },
  "/base-practice": {
    active: true,
    banner: "biology-banner",
    description: "Practice pairing DNA and RNA bases.",
    element: Biology.DNABasePractice,
    path: "/base-practice",
    subject: ["biology"],
    title: "DNA Base Practice",
  },
  "/biology": {
    active: true,
    banner: "biology-banner",
    description: "",
    element: Biology.Biology,
    path: "/biology",
    subject: null,
    title: "Biology Home",
  },
  "/chemistry": {
    active: true,
    banner: "chemistry-banner",
    description: "",
    element: Chemistry.Chemistry,
    path: "/chemistry",
    subject: null,
    title: "Chemistry Home",
  },
  "/half-life": {
    active: true,
    banner: "chemistry-banner",
    description:
      "Practice calculating half life and activity in relation to radiation.",
    element: Physics.HalfLife,
    path: "/half-life",
    subject: ["physics"],
    title: "Half Life",
  },
  "/index": {
    active: true,
    banner: "home-banner",
    description: "",
    element: ToolsIndex,
    path: "/index",
    subject: null,
    title: "Tools Index",
  },
  "/molarity": {
    active: true,
    banner: "chemistry-banner",
    description:
      "Learn more about molarity, how to calculate it, and get plenty of practice.",
    element: Chemistry.Molarity,
    path: "/molarity",
    subject: ["chemistry"],
    title: "Molarity",
  },
  "/molarity-practice": {
    active: true,
    banner: "chemistry-banner",
    description:
      "Practice calculating molarity in varying levels of difficulty.",
    element: Chemistry.MolarityPractice,
    path: "/molarity-practice",
    subject: ["chemistry"],
    title: "Molarity Practice",
  },
  "/percentage-change": {
    active: true,
    banner: "home-banner",
    description:
      "Learn how to calculate percentage change, and get plenty of practice.",
    element: Biology.PercentageChange,
    path: "/percentage-change",
    subject: ["biology", "chemistry", "physics"],
    title: "Percentage Change",
  },
  "/physics": {
    active: true,
    banner: "physics-banner",
    description: "",
    element: Physics.Physics,
    path: "/physics",
    subject: null,
    title: "Physics Home",
  },
  "/understanding-molarity": {
    active: true,
    banner: "chemistry-banner",
    description:
      "Learn about the terms needed when it comes to understanding how to calculate molarity.",
    element: Chemistry.UnderstandingMolarity,
    path: "/understanding-molarity",
    subject: ["chemistry"],
    title: "Understanding Molarity",
  },
};

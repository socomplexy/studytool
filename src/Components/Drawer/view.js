import BiotechIcon from "@mui/icons-material/Biotech";
import HomeIcon from "@mui/icons-material/Home";
import HubIcon from "@mui/icons-material/Hub";
import WavesIcon from "@mui/icons-material/Waves";

export const views = [
  {
    category: "Home",
    icon: <HomeIcon />,
  },
  {
    category: "Biology",
    icon: <BiotechIcon />,
    categoryViews: [
      {
        label: "DNA Base Pairs",
        route: "base-pairs",
        disabled: true,
      },
    ],
  },
  {
    category: "Chemistry",
    icon: <HubIcon />,
    categoryViews: [
      {
        label: "Chemical Equations",
        route: "chemical-equations",
        disabled: true,
      },
      {
        label: "Molarity",
        route: "molarity",
        disabled: false,
      },
      {
        label: "Molarity Practice",
        route: "molarity-practice",
        disabled: false,
      },
      {
        label: "Understanding Molarity",
        route: "understanding-molarity",
        disabled: false,
      },
    ],
  },
  {
    category: "Physics",
    icon: <WavesIcon />,
    categoryViews: [
      {
        label: "Absorbed Dose",
        route: "absorbed-dose",
        disabled: true,
      },
      {
        label: "Activity & Half-Life",
        route: "half-life",
        disabled: false,
      },
    ],
  },
];

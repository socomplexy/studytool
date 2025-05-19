import BiotechIcon from "@mui/icons-material/Biotech";
import HomeIcon from "@mui/icons-material/Home";
import HubIcon from "@mui/icons-material/Hub";
import WavesIcon from "@mui/icons-material/Waves";

export const views = [
  {
    category: "Home",
    icon: <HomeIcon />,
    route: "",
  },
  {
    category: "Biology",
    icon: <BiotechIcon />,
    route: "biology",
  },
  {
    category: "Chemistry",
    icon: <HubIcon />,
    route: "chemistry",
  },
  {
    category: "Physics",
    icon: <WavesIcon />,
    route: "physics",
  },
];

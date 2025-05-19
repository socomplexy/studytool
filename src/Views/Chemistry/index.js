import { Molarity } from "./Molarity";
import { UnderstandingMolarity } from "./UnderstandingMolarity";
import { MolarityPractice } from "./MolarityPractice";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ChemistryHome = ({ isLargeScreen, MenuIcon }) => {
  const listItemProps = {
    component: Link,
    style: { textDecoration: "none" },
  };

  return (
    <div className="view-wrapper">
      {!isLargeScreen ? MenuIcon : null}
      <div className="banner chemistry-banner" />
      <div className="content-wrapper">
        <Typography
          variant="h4"
          component="h1"
          color="text.secondary"
          gutterBottom
        >
          Chemistry Home
        </Typography>
        <Typography>
          Learn about chemistry topics like molarity, balancing chemical
          equations, theoretical yield and more. All topics include randomly
          generated questions for unlimited practice time! Content included
          supports studies on the following SQA units:
        </Typography>
        <List>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Chemical Changes and Structure (J1YK 76)" />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Chemistry in Society (J32E 76)" />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Nature's Chemistry (J23C 76)" />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Researching Chemistry (J204 76)" />
          </ListItem>
        </List>
        <Divider sx={{ mt: 2, mb: 3 }} />
        <List>
          {/* <ListItem {...listItemProps} to="/chemical-equations">
            <ListItemText
              primary="Chemical Equations"
              secondary="Learn how to balance chemical equations with lots of practice!"
            />
          </ListItem>
          <Divider variant="inset" component="li" /> */}
          {/* <ListItem {...listItemProps} to="/limiting-reagent">
            <ListItemText
              primary="Limiting Reagent"
              secondary="Learn how to calculate the limiting reagent"
            />
          </ListItem>
          <Divider variant="inset" component="li" /> */}
          <ListItem {...listItemProps} to="/molarity">
            <ListItemText
              primary="Molarity"
              secondary="View all content relating to molarity"
            />
          </ListItem>
          {/* <Divider variant="inset" component="li" />
          <ListItem {...listItemProps} to="/molecule-generator" disabled>
            <ListItemText
              primary="Molecule Generator"
              secondary="Practice naming alkanes, alkenes, alcohols, carboxylic acids, esters, and more!"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem {...listItemProps} to="/yield" disabled>
            <ListItemText
              primary="Theoretical and Percentage Yield"
              secondary="Practice calculating theoretical and percentage yield."
            />
          </ListItem> */}
        </List>
      </div>
    </div>
  );
};

export const Chemistry = {
  Chemistry: ChemistryHome,
  Molarity,
  MolarityPractice,
  UnderstandingMolarity,
};

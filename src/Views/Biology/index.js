import { DNABasePractice } from "./DNABasePractice";
import { PercentageChange } from "./PercentageChange";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const BiologyHome = ({ isLargeScreen, MenuIcon }) => {
  const listItemProps = {
    component: Link,
    style: { textDecoration: "none" },
  };

  return (
    <div className="view-wrapper">
      {!isLargeScreen ? MenuIcon : null}
      <div className="banner genetics-banner" />
      <div className="content-wrapper">
        <Typography
          variant="h4"
          component="h1"
          color="text.secondary"
          gutterBottom
        >
          Biology Home
        </Typography>
        <Typography>
          Learn about biology topics like matching base pairs, calculating
          percentage change, reading hereditary trees, and more. All topics
          include randomly generated questions for unlimited practice time!
          Content included supports studies on the following SQA units:
        </Typography>
        <List>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Cell Biology (J4A9 75)" />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="DNA and the Genome (J4A6 76)" />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Human Cells (J4A3 76)" />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Multicellular Organisms (J4AA 75)" />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Neurobiology and Immunology (J4A4 76)" />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Physiology and Health (J4A5 76)" />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText secondary="Sustainability and Interdependence (J4A8 76)" />
          </ListItem>
        </List>
        <Divider sx={{ mt: 2, mb: 3 }} />
        <List>
          <ListItem {...listItemProps} to="/percentage-change">
            <ListItemText
              primary="Percentage Change"
              secondary="Learn how to calculate percentage change, with unlimited practice examples."
            />
          </ListItem>
          {/* <Divider variant="inset" component="li" /> */}
          {/* <ListItem {...listItemProps} to="/hereditary-tress">
            <ListItemText
              primary="Hereditary Trees"
              secondary="Learn how to read hereditary trees"
            />
          </ListItem>
          <Divider variant="inset" component="li" /> */}
          {/* <ListItem {...listItemProps} to="/percentage-change">
            <ListItemText
              primary="Percentage Change"
              secondary="Learn how to calculate percentage change"
            />
          </ListItem>
          <Divider variant="inset" component="li" /> */}
          {/* <ListItem {...listItemProps} to="/punnet-squares">
            <ListItemText
              primary="Phenotype Punnet Squares"
              secondary="Learn how to use punnet squares to determine the likelihood of a particular genotype"
            />
          </ListItem>
          <Divider variant="inset" component="li" /> */}
        </List>
      </div>
    </div>
  );
};

export const Biology = {
  Biology: BiologyHome,
  DNABasePractice,
  PercentageChange,
};

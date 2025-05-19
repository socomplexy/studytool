import { HalfLife } from "./HalfLife";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const PhysicsHome = ({ isLargeScreen, MenuIcon }) => {
  const listItemProps = {
    component: Link,
    style: { textDecoration: "none" },
  };

  return (
    <div className="view-wrapper">
      {!isLargeScreen ? MenuIcon : null}
      <div className="banner physics-banner" />
      <div className="content-wrapper">
        <Typography
          variant="h4"
          component="h1"
          color="text.secondary"
          gutterBottom
        >
          Physics Home
        </Typography>
        <Typography>
          Learn about physics topics like lenses, radiation, electricity, and
          more. All topics include randomly generated questions for unlimited
          practice time! Content included supports studies on the following SQA
          unit: Introductory Physics (HT8R 45).
        </Typography>
        <Divider sx={{ mt: 2, mb: 3 }} />
        <List>
          {/* Don't forget heat and absorbed dose! */}
          <ListItem {...listItemProps} to="/half-life">
            <ListItemText
              primary="Activity and Half Life"
              secondary="Practice calculating radiation activity and half life"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          {/* <ListItem {...listItemProps} to="/waves">
            <ListItemText
              primary="Waves"
              secondary=""
            />
          </ListItem>
          <Divider variant="inset" component="li" /> */}
          {/* <ListItem {...listItemProps} to="/lenses">
            <ListItemText
              primary="Lenses"
              secondary="including focal point calculator"
            />
          </ListItem>
          <Divider variant="inset" component="li" /> */}
          {/* <ListItem {...listItemProps} to="/electricity">
            <ListItemText
              primary="Electricity"
              secondary="create circuit diagram, calculate current and charge and whatnot"
            />
          </ListItem>
          <Divider variant="inset" component="li" /> */}
        </List>
      </div>
    </div>
  );
};

export const Physics = {
  Physics: PhysicsHome,
  HalfLife,
};

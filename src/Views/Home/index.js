import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Home = ({ isLargeScreen, MenuIcon }) => {
  const listItemProps = {
    component: Link,
    style: { textDecoration: "none" },
  };

  return (
    <div className="view-wrapper">
      {!isLargeScreen ? MenuIcon : null}
      <div className="banner home-banner">
        <div className="content-wrapper">
          <Typography variant="h1" color="text.primary" gutterBottom>
            Home
          </Typography>
        </div>
      </div>
      <div className="content-wrapper">
        <Typography
          variant="h4"
          component="h2"
          color="text.secondary"
          gutterBottom
        >
          Study tools for biology, chemistry and mathematics
        </Typography>
        <Typography>
          These are tools that I've created to help me and my classmates with
          classes associated with the SWAP Access to Health and Life Sciences
          course. I will be slowly adding to this as I have time, but feel free
          to explore!
        </Typography>
        <Divider sx={{ mt: 2, mb: 3 }} />
        <List>
          <ListItem {...listItemProps} to="/molarity">
            <ListItemText
              primary="Molarity"
              secondary="View all content relating to molarity"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem {...listItemProps} to="/understanding-molarity">
            <ListItemText
              primary="Understanding Molarity"
              secondary="Definitions and equations for calculating molarity"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem {...listItemProps} to="/molarity-practice">
            <ListItemText
              primary="Molarity Practice"
              secondary="Practice calculating molarities!"
            />
          </ListItem>
          {/* <Divider variant="inset" component="li" />
          <ListItem {...listItemProps} to="/genetics">
            <ListItemText
              primary="Genetics"
              secondary="View all content relating to genetics"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem {...listItemProps} to="/base-practice">
            <ListItemText
              primary="DNA Base Pairs"
              secondary="Practice matching DNA base pairs!"
            />
          </ListItem> */}
        </List>
      </div>
    </div>
  );
};

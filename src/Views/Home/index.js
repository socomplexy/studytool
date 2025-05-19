import {
  Divider,
  Link as MUILink,
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
      <div className="banner home-banner"></div>
      <div className="content-wrapper">
        <Typography
          variant="h4"
          component="h1"
          color="text.secondary"
          gutterBottom
        >
          Study tools for science
        </Typography>
        <Typography>
          I took the{" "}
          <MUILink
            href="https://www.perth.uhi.ac.uk/courses/nq-applied-health-and-life-sciences-swap"
            target="_blank"
          >
            Applied Health and Life Sciences (SWAP) NQ
          </MUILink>{" "}
          at UHI Perth in 2024-2025. These are tools that I've created to help
          me and my classmates with classes associated with the course. I will
          be slowly adding to this as I have time, but feel free to explore
          what's here for now! Please keep in mind that this site is{" "}
          <strong>not</strong> in any way associated with SWAP, UHI or SQA, and
          the content is simply meant as a tool to help solidify certain
          concepts on my own initiative.
        </Typography>
        <Divider sx={{ mt: 2, mb: 3 }} />
        <List>
          <ListItem {...listItemProps} to="/biology">
            <ListItemText
              primary="Biology"
              secondary="Cell biology, human biology and physiology, sustainability and interdependence"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem {...listItemProps} to="/chemistry">
            <ListItemText
              primary="Chemistry"
              secondary="Balancing chemical equations, limiting reagents, naming molecules, theoretical yield"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem {...listItemProps} to="/physics">
            <ListItemText
              primary="Physics"
              secondary="Electricity, heat, lenses, radiation"
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

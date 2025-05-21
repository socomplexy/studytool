import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Views } from "..";

export const ToolsIndex = ({ isLargeScreen, MenuIcon }) => {
  const listItemProps = {
    component: Link,
    style: { textDecoration: "none" },
  };

  const shouldListView = (view) => {
    const viewsToExclude = [
      "/",
      "/index",
      "/biology",
      "/chemistry",
      "/physics",
    ];
    const isActive = Views[view].active;
    const isExempt = viewsToExclude.includes(view);
    return isActive && !isExempt;
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
          Index of study tools
        </Typography>
        <Typography>
          This is an alphabetical listing of all study tools available. You can
          also find them groups on their subject pages.
        </Typography>
        <Divider sx={{ mt: 2, mb: 3 }} />
        <List>
          {Object.keys(Views).map((view) => {
            return shouldListView(view) ? (
              <ListItem
                {...listItemProps}
                to={Views[view].path}
                key={`index-view-${Views[view].path}`}
              >
                <ListItemText
                  primary={Views[view].title}
                  secondary={Views[view].description}
                />
              </ListItem>
            ) : null;
          })}
        </List>
      </div>
    </div>
  );
};

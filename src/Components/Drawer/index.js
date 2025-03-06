import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { views } from "./view";

const drawerWidth = 240;

export const Drawer = ({ isLargeScreen, navOpen, handleNavClose }) => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    handleNavClose();
    navigate(`/${path}`, { replace: true });
  };

  const drawer = (
    <div>
      {isLargeScreen ? (
        <div style={{ padding: 5 }}></div>
      ) : (
        <>
          <div
            onClick={handleNavClose}
            style={{ textAlign: "right", padding: 10, cursor: "pointer" }}
          >
            <CloseIcon />
          </div>
          <Divider />
        </>
      )}
      {views.map((view, index) => (
        <List key={`drawer-list-${view.category}`} dense disablePadding>
          {view.category === "Home" ? (
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigateTo("")}>
                <ListItemIcon>{view.icon}</ListItemIcon>
                <ListItemText primary={view.category} />
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem>
              {view.icon ? <ListItemIcon>{view.icon}</ListItemIcon> : null}
              <ListItemText primary={view.category} />
            </ListItem>
          )}

          {view.categoryViews
            ? view.categoryViews.map((v, i) => (
                <ListItem key={`category-view-${v.route}`} disablePadding>
                  <ListItemButton
                    onClick={() => navigateTo(v.route)}
                    disabled={v.disabled}
                  >
                    {v.icon ? <ListItemIcon>{v.icon}</ListItemIcon> : null}
                    <ListItemText inset primary={v.label} />
                  </ListItemButton>
                </ListItem>
              ))
            : null}

          {index !== views.length - 1 ? <Divider /> : null}
        </List>
      ))}
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <MuiDrawer
          variant={isLargeScreen ? "permanent" : "temporary"}
          open={navOpen}
          onClose={handleNavClose}
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </MuiDrawer>
      </Box>
    </Box>
  );
};

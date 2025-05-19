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
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigateTo(view.route)}>
              <ListItemIcon>{view.icon}</ListItemIcon>
              <ListItemText primary={view.category} />
            </ListItemButton>
          </ListItem>
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

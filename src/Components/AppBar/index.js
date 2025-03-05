import { Link } from "react-router-dom";
import {
  AppBar as MUIAppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

export const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Study Tools
          </Typography>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
};

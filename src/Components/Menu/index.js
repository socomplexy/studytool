import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HubIcon from "@mui/icons-material/Hub";
import Home from "@mui/icons-material/Home";
import Calculate from "@mui/icons-material/Calculate";

export const Menu = ({ isOpen, onClick }) => {
  return (
    <>
      {isOpen ? (
        <Paper
          sx={{
            width: 320,
            maxWidth: "100%",
            position: "absolute",
            zIndex: 100,
            top: 40,
            left: 10,
          }}
        >
          <MenuList>
            <MenuItem onClick={() => onClick("Home")}>
              <ListItemIcon>
                <Home fontSize="small" />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => onClick("MolarityPractice")}>
              <ListItemIcon>
                <Calculate fontSize="small" />
              </ListItemIcon>
              <ListItemText>Molarity Conversion</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => onClick("MoleculeGenerator")}>
              <ListItemIcon>
                <HubIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Molecule Generator</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      ) : null}
    </>
  );
};

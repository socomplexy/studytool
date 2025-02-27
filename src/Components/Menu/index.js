import {
  Divider,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
// import HubIcon from "@mui/icons-material/Hub";

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
          <MenuList dense>
            <MenuItem onClick={() => onClick("Home")}>
              <ListItemIcon>
                <Home fontSize="small" />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <Divider />
            <ListSubheader>Molarity</ListSubheader>
            <MenuItem onClick={() => onClick("UnderstandingMolarity")}>
              <ListItemText inset>Understanding Molarity</ListItemText>
            </MenuItem>
            <MenuItem disabled>
              <ListItemText inset>Molarity Conversion</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => onClick("MolarityPractice")}>
              <ListItemText inset>Practice Molarity Conversion</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem disabled>
              <ListItemText inset>Balancing Chemical Equations</ListItemText>
            </MenuItem>
            <MenuItem disabled>
              <ListItemText inset>Molecule Generator</ListItemText>
            </MenuItem>
            <MenuItem disabled>
              <ListItemText inset>Theoretical Yield</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      ) : null}
    </>
  );
};

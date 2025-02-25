import { Drawer as MUIDrawer } from "@mui/material";

export const Drawer = ({ isOpen = true }) => {
  return <MUIDrawer open={isOpen} anchor="bottom"></MUIDrawer>;
};

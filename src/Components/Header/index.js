import MenuIcon from "@mui/icons-material/Menu";

export const Header = ({ onClick, isOpen }) => {
  return (
    <MenuIcon
      onClick={() => onClick(!isOpen)}
      sx={{ position: "absolute", top: 10, left: 10 }}
    />
  );
};

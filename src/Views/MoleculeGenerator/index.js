import { Box, Typography } from "@mui/material";

export const MoleculeGenerator = ({}) => {
  return (
    <div className="view-wrapper">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Molecule Generator
        </Typography>
      </Box>
    </div>
  );
};

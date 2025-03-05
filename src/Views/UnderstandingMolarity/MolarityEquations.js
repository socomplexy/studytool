import { Box, Typography } from "@mui/material";

export const MolarityEquations = ({}) => {
  const titleProps = {
    variant: "h5",
    sx: { color: "warning.main", mt: 4, fontWeight: 600 },
  };
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" component="h3" gutterBottom>
        Important equations
      </Typography>
      <Typography sx={{ mb: 1.5 }}>
        There are two equations we need to remember. These can be rearranged to
        solve for different things.
      </Typography>
      <Typography {...titleProps}>C = n / V</Typography>
      <Typography>
        This can be rearranged to n = CV or V=n/C, depending on what you are
        solving for.
      </Typography>
      <Typography {...titleProps}>n = m / GFM</Typography>
      <Typography>
        This can be rearranged to m=n * GFM{" "}
        <em>
          (we wouldn't need to rearrange for GFM as this is information we can
          always obtain.)
        </em>
      </Typography>
    </Box>
  );
};

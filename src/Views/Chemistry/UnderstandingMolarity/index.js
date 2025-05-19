import { MolarityEquations } from "./MolarityEquations";
import { MolarityTerms } from "./MolarityTerms";
import { Divider, Typography } from "@mui/material";

export const UnderstandingMolarity = ({ isLargeScreen, MenuIcon }) => {
  return (
    <div className="view-wrapper">
      {!isLargeScreen ? MenuIcon : null}
      <div className="banner molarity-banner"></div>
      <div className="content-wrapper">
        <Typography
          variant="h4"
          component="h1"
          color="text.secondary"
          gutterBottom
        >
          Understanding Molarity
        </Typography>
        <MolarityTerms />
        <Divider sx={{ mb: 3, mt: 3 }} />
        <MolarityEquations />
      </div>
    </div>
  );
};

import { MolarityEquations } from "./MolarityEquations";
import { MolarityTerms } from "./MolarityTerms";
import { Divider, Typography } from "@mui/material";

export const UnderstandingMolarity = ({ isLargeScreen, MenuIcon }) => {
  return (
    <div className="view-wrapper">
      {!isLargeScreen ? MenuIcon : null}
      <div className="banner molarity-banner">
        <div className="content-wrapper">
          <Typography variant="h1" color="#e3f2fd" gutterBottom>
            Understanding Molarity
          </Typography>
        </div>
      </div>
      <div className="content-wrapper">
        <MolarityTerms />
        <Divider sx={{ mb: 3, mt: 3 }} />
        <MolarityEquations />
      </div>
    </div>
  );
};

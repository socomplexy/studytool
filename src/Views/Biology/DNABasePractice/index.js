import { Box, Typography } from "@mui/material";
import "./bases.scss";

export const DNABasePractice = () => {
  // const sharedStyles = {
  //   lineHeight: 1.8,
  //   width: "fit-content",
  //   width: "40px",
  //   padding: "2px 5px",
  //   color: "white",
  //   fontWeight: 600,
  // };

  return (
    <div className="view-wrapper">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          DNA Base Practice
        </Typography>
      </Box>
      <div className="dna-base-pairs">
        <div className="dna-bases a-base">A</div>
        <div className="dna-bases t-base right">T</div>
      </div>
      <div className="dna-base-pairs">
        <div className="dna-bases c-base">C</div>
        <div className="dna-bases g-base right">G</div>
      </div>
      <div className="dna-base-pairs">
        <div className="dna-bases t-base">T</div>
        <div className="dna-bases a-base right">A</div>
      </div>
      <div className="dna-base-pairs">
        <div className="dna-bases g-base">G</div>
        <div className="dna-bases c-base right">C</div>
      </div>
    </div>
  );
};

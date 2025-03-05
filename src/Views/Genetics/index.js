import { Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Genetics = ({}) => {
  return (
    <div className="view-wrapper">
      <div className="banner genetics-banner">
        <div className="content-wrapper">
          <Typography variant="h1" color="#e3f2fd" gutterBottom>
            Genetics
          </Typography>
        </div>
      </div>
      <div className="content-wrapper">
        <Typography variant="h3" component="h2">
          DNA Bases
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography>
          <Link to="/base-practice">Practice DNA Bases</Link>
        </Typography>
      </div>
    </div>
  );
};

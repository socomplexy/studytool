import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const Molarity = ({ isLargeScreen, MenuIcon }) => {
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
          Molarity
        </Typography>
        <Card sx={{ minWidth: 275, mb: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              mo{bull}lar{bull}i{bull}ty
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              noun
            </Typography>
            <Typography variant="body2">
              Molarity (also called molar concentration, amount concentration or
              substance concentration) is a measure of the concentration of a
              chemical species, in particular, of a solute in a solution, in
              terms of amount of substance per unit volume of solution.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/understanding-molarity">
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
        <Typography>
          In chemistry, molarity (M) is a concentration unit, defined to be the
          number of moles of solute divided by the number of liters of solution.
          It is one of the most common concentration units, so it's important to
          understand how it's calculated and when to use it versus when to use
          another unit. It's an important skill to master for chemistry
          students, so{" "}
          <Link to="/molarity-practice">practice molarity calculations</Link> to
          improve this skill.
        </Typography>
      </div>
    </div>
  );
};

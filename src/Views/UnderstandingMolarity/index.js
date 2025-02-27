import { MolarityEquations } from "./MolarityEquations";
import { MolarityTerms } from "./MolarityTerms";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

export const UnderstandingMolarity = ({ updateView }) => {
  return (
    <div className="view-wrapper">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Understanding Molarity
        </Typography>
      </Box>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="./static/images/cards/chemistry.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Practice Molarity Calculations!
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Practice varying levels of converting for molarity, volume, number
            of moles and mass.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => updateView("MolarityPractice")}>
            Practice now!
          </Button>
        </CardActions>
      </Card>
      <MolarityTerms />
      <Divider sx={{ mb: 3, mt: 3 }} />
      <MolarityEquations />
    </div>
  );
};

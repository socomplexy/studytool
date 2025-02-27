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
          image="https://plus.unsplash.com/premium_photo-1661603887154-cb5f58a51768?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

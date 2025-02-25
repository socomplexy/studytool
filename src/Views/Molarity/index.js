import { useState } from "react";
import { simpleConversion } from "./molarityCalculation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

export const Molarity = ({}) => {
  const [calculation, setCalculation] = useState(simpleConversion());
  const getNewCalculation = () => {
    toggleHintVisible(false);
    toggleAnswerVisible(false);
    setCalculation(simpleConversion());
  };

  const [hintVisible, setHintVisible] = useState(false);
  const toggleHintVisible = (status) => setHintVisible(status ?? !hintVisible);

  const [answerVisible, setAnswerVisible] = useState(false);
  const toggleAnswerVisible = (status) =>
    setAnswerVisible(status ?? !answerVisible);

  return (
    <div className="view-wrapper">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Molarity Calculations
        </Typography>
      </Box>
      <ButtonGroup color="secondary">
        <Button
          variant="outlined"
          startIcon={<LightbulbIcon />}
          onClick={() => toggleHintVisible(!hintVisible)}
        >
          Hint
        </Button>
        <Button variant="outlined" onClick={toggleAnswerVisible}>
          Answer
        </Button>
        <Button
          variant="outlined"
          endIcon={<SkipNextIcon />}
          onClick={getNewCalculation}
        >
          Next
        </Button>
      </ButtonGroup>

      <Card variant="outlined" sx={{ marginTop: 5 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {calculation ? (
              <span
                dangerouslySetInnerHTML={{ __html: calculation.question }}
              />
            ) : null}
          </Typography>
          {hintVisible ? (
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ color: "text.secondary" }}
            >
              {calculation ? (
                <span dangerouslySetInnerHTML={{ __html: calculation.hint }} />
              ) : null}
            </Typography>
          ) : null}
          {answerVisible ? (
            <>
              <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
              <Typography variant="h4" color="error" gutterBottom>
                {calculation ? (
                  <span
                    dangerouslySetInnerHTML={{ __html: calculation.answer }}
                  />
                ) : null}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                gutterBottom
              >
                {calculation ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: calculation.explanation,
                    }}
                  />
                ) : null}
              </Typography>
            </>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
};

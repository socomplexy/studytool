import { useState, useEffect } from "react";
import { advancedConversion } from "./molarityCalculation";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export const MolarityPracticeHard = ({
  answerVisible,
  calculation,
  hintVisible,
  newCalculation,
  toggleAnswerVisible,
  toggleHintVisible,
}) => {
  const [advancedCalculation, setAdvancedCalculation] = useState(
    advancedConversion(calculation)
  );

  useEffect(() => {
    setAdvancedCalculation(advancedConversion(calculation));
  }, [calculation]);

  return (
    <div style={{ paddingTop: 30 }}>
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
          onClick={newCalculation}
        >
          Next
        </Button>
      </ButtonGroup>

      <Card variant="outlined" sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {advancedCalculation ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: advancedCalculation.advancedQuestion,
                }}
              />
            ) : null}
          </Typography>
          {hintVisible ? (
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ color: "text.secondary" }}
            >
              {advancedCalculation ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: advancedCalculation.advancedHint,
                  }}
                />
              ) : null}
            </Typography>
          ) : null}
          {answerVisible ? (
            <>
              <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
              <Typography variant="h4" color="error" gutterBottom>
                {advancedCalculation ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: advancedCalculation.advancedAnswer,
                    }}
                  />
                ) : null}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                gutterBottom
              >
                {advancedCalculation ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: advancedCalculation.advancedExplanation,
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

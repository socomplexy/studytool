import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { generateData } from "./percentageChangeCalcs";

export const PercentageChangePractice = () => {
  const [data, setData] = useState(generateData());
  const [answerVisible, setAnswerVisible] = useState(false);
  const toggleAnswerVisible = (status) =>
    setAnswerVisible(status ?? !answerVisible);

  const newCalculation = () => {
    toggleAnswerVisible(false);
    setData(generateData());
  };

  return (
    <Box sx={{ pt: 2 }}>
      <ButtonGroup color="secondary">
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
            {data ? data.question : null}
          </Typography>
          {answerVisible ? (
            <>
              <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
              <Typography
                variant="h4"
                color={data && data.type === "increase" ? "success" : "error"}
                gutterBottom
              >
                {data ? `${data.answer}% (${data.type})` : null}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                gutterBottom
              >
                {data ? data.explanation : null}
              </Typography>
            </>
          ) : null}
        </CardContent>
      </Card>

      {/* <Typography>{data ? data.question : null}</Typography> */}
    </Box>
  );
};

import { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { Utils } from "../../utils";

export const HalfLife = () => {
  const [answerVisible, setAnswerVisible] = useState(false);
  const toggleAnswerVisibility = (status) => setAnswerVisible(status);

  const [data, setData] = useState();
  const handleSetData = (x) => setData(x);

  const getNewProblem = () => {
    toggleAnswerVisibility(false);
    let num = Math.round(Utils.getRandomInt(100000, 1000) / 100) * 100;
    const halfLives = Utils.getRandomInt(5);
    const multiplier = 0.5 ** halfLives;
    handleSetData({
      startingNumber: num,
      answer: num * multiplier,
      halfLives,
    });
  };

  !data && getNewProblem();

  return (
    <Box sx={{ mt: 2 }}>
      {data ? (
        <>
          <Typography>
            A radioactive chemical has an activity of{" "}
            {data.startingNumber.toLocaleString()} Bq. What is the activity of
            this chemical after {data.halfLives} half-lives have passed?
          </Typography>

          <Box sx={{ mt: 3 }}>
            {!answerVisible ? (
              <Chip
                label="Show Answer"
                color="secondary"
                onClick={toggleAnswerVisibility}
              />
            ) : (
              <Chip
                label="New question"
                color="primary"
                onClick={getNewProblem}
              />
            )}
            {answerVisible ? (
              <Typography variant="h5" sx={{ mt: 3 }}>
                {`${
                  data.answer % 1 === 0
                    ? Math.round(data.answer).toLocaleString()
                    : data.answer.toFixed(2).toLocaleString()
                } Bq`}
              </Typography>
            ) : null}
          </Box>
        </>
      ) : null}
    </Box>
  );
};

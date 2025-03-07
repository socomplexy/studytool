import { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { Components } from "../../Components";
import { Utils } from "../../utils";

export const HalfLifeChart = ({ isLargeScreen, isotope, dataset }) => {
  const [answerVisible, setAnswerVisible] = useState(false);
  const toggleAnswerVisibility = (status) => setAnswerVisible(status);

  const [data, setData] = useState();
  const handleSetData = (x) => setData(x);

  const getNewProblem = () => {
    toggleAnswerVisibility(false);

    const integer = Utils.getRandomInt(4);
    const isOdd = integer % 2 === 1;
    const answer = isOdd
      ? `${isotope.halfLife} hours`
      : `${isotope.halfLife * 0.5 ** (integer - 1)} Bq`;

    handleSetData({
      integer,
      isOdd,
      answer,
    });
  };

  !data && getNewProblem();

  return (
    <Box sx={{ mt: 2 }}>
      {data ? (
        <>
          {data.isOdd ? (
            <Typography>
              According to the graph, what is the half-life of {isotope.name}?
            </Typography>
          ) : (
            <Typography>
              According to the graph, how much of the remains at the{" "}
              {Utils.getOrdinal(data.integer)} half-life of {isotope.name}?
            </Typography>
          )}

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
                {data.answer}
              </Typography>
            ) : null}
          </Box>
          <Components.LineChart
            dataset={dataset}
            isLargeScreen={isLargeScreen}
          />
        </>
      ) : null}
    </Box>
  );
};

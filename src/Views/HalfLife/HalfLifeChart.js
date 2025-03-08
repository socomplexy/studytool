import { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { Components } from "../../Components";
import { Utils } from "../../utils";
import { populateDataset } from "./halfLifeCalculations";

export const HalfLifeChart = ({ isLargeScreen }) => {
  const [answerVisible, setAnswerVisible] = useState(false);
  const toggleAnswerVisibility = (status) => setAnswerVisible(status);

  const [data, setData] = useState();
  const handleSetData = (x) => setData(x);

  const getNewProblem = () => {
    toggleAnswerVisibility(false);
    const problem = populateDataset();

    const isotope = problem.isotope;
    const dataset = problem.dataset;
    const integer = Utils.getRandomInt(4);
    const isOdd = integer % 2 === 1;
    const answer = isOdd
      ? `${isotope.halfLife} hours`
      : `${(
          isotope.halfLife *
          0.5 ** (integer - 1) *
          1000
        ).toLocaleString()} Bq`;

    handleSetData({
      integer,
      isOdd,
      answer,
      isotope,
      dataset,
    });
  };

  !data && getNewProblem();

  return (
    <Box sx={{ mt: 2 }}>
      {data ? (
        <>
          {data.isOdd ? (
            <Typography>
              According to the graph, what is the half-life of{" "}
              {data.isotope.name}?
            </Typography>
          ) : (
            <Typography>
              According to the graph, what is the activity at the{" "}
              {Utils.getOrdinal(data.integer)} half-life of {data.isotope.name}?
            </Typography>
          )}

          <Box sx={{ mt: 3, display: "flex" }}>
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
              <Typography variant="h5" color="error" sx={{ ml: 2 }}>
                {data.answer}
              </Typography>
            ) : null}
          </Box>
          <Components.LineChart
            dataset={data.dataset}
            isLargeScreen={isLargeScreen}
          />
        </>
      ) : null}
    </Box>
  );
};

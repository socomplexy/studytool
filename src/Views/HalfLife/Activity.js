import { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { Utils } from "../../utils";

export const Activity = () => {
  const [answerVisible, setAnswerVisible] = useState(false);
  const toggleAnswerVisibility = (status) => setAnswerVisible(status);

  const timeMultiplier = (units) =>
    units === "minutes" ? 60 : units === "hours" ? 3600 : 1;
  const [data, setData] = useState();
  const handleSetData = (x) => setData(x);

  const getNewProblem = () => {
    toggleAnswerVisibility(false);
    let num = Math.round(Utils.getRandomInt(1000000, 10000) / 100) * 100;
    let t = Utils.getRandomInt(100, 1);
    let u = Utils.getRandomArraySelection(["seconds", "minutes"]);
    handleSetData({
      startingNumber: num,
      time: t,
      timeUnits: u,
      answer: num / (t * timeMultiplier(u)),
    });
  };

  !data && getNewProblem();

  return (
    <Box sx={{ mt: 2 }}>
      {data ? (
        <>
          <Typography>
            For a particular radioactive source{" "}
            {data.startingNumber.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}{" "}
            atoms decay in a time of {data.time} {data.timeUnits}. What is the
            activity of the source?
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
              <Typography variant="h5" color="error" sx={{ mt: 3 }}>
                {`${
                  data.answer % 1 === 0
                    ? Math.round(data.answer).toLocaleString()
                    : data.answer.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                } Bq`}
              </Typography>
            ) : null}
          </Box>
        </>
      ) : null}
    </Box>
  );
};

import { useState } from "react";
import { simpleConversion } from "./molarityCalculation";
import { MolarityPracticeEasy } from "./MolarityPracticeEasy";
import { MolarityPracticeHard } from "./MolarityPracticeHard";
import { Box, Tab, Tabs, Typography } from "@mui/material";

export const MolarityPractice = ({}) => {
  const [calculation, setCalculation] = useState(simpleConversion());
  const newCalculation = () => {
    toggleHintVisible(false);
    toggleAnswerVisible(false);
    setCalculation(simpleConversion());
  };

  const [hintVisible, setHintVisible] = useState(false);
  const toggleHintVisible = (status) => setHintVisible(status ?? !hintVisible);

  const [answerVisible, setAnswerVisible] = useState(false);
  const toggleAnswerVisible = (status) =>
    setAnswerVisible(status ?? !answerVisible);

  const [practiceLevel, setPracticeLevel] = useState(0);
  const updatePracticeLevel = (level) => setPracticeLevel(level);

  const practiceProps = {
    calculation,
    newCalculation,
    answerVisible,
    hintVisible,
    toggleAnswerVisible,
    toggleHintVisible,
  };

  return (
    <div className="view-wrapper">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Molarity Practice
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={practiceLevel}>
            <Tab label="Easy" onClick={() => updatePracticeLevel(0)} />
            <Tab label="Harder" onClick={() => updatePracticeLevel(1)} />
          </Tabs>
        </Box>
        {practiceLevel === 0 ? (
          <MolarityPracticeEasy {...practiceProps} />
        ) : null}
        {practiceLevel === 1 ? (
          <MolarityPracticeHard {...practiceProps} />
        ) : null}
      </Box>
    </div>
  );
};

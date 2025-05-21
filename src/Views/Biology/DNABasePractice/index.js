import { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import SkipNextIcon from "@mui/icons-material/SkipNext";
import "./bases.scss";
import { populateBasePairs } from "./bases.js";

export const DNABasePractice = ({ isLargeScreen, MenuIcon }) => {
  const [isDnaOrRna, setIsDnaOrRna] = useState("DNA");
  const [pairs, setPairs] = useState(populateBasePairs(isDnaOrRna));
  const [isComplete, setIsComplete] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const toggleDnaRna = (state) => {
    const value = state.target.value;
    value !== isDnaOrRna && setIsDnaOrRna(value);
    getNewProblem(value);
  };

  const getNewProblem = (value) => {
    clearTimeout(timeoutId);
    setTimerOn(false);
    setTimer(0);
    setIsComplete(false);
    setPairs(populateBasePairs(value || isDnaOrRna));
  };

  useEffect(() => {
    if (timerOn) {
      setTimeoutId(
        setTimeout(() => {
          // stop counting at 1 minutes
          timer < 60 * 1000 && setTimer(timer + 1000);
        }, 1000)
      );
    }
  }, [timerOn, timer]);

  const processAnswer = (key) => {
    const updatedResult = [...pairs];
    updatedResult[key].isCorrect = true;
    setPairs(updatedResult);

    const keys = updatedResult && Object.keys(updatedResult);
    const questionCount = keys.length;
    const numberCorrect = keys
      ? keys.filter((x) => updatedResult[x].isCorrect).length
      : 0;
    const complete = numberCorrect === questionCount;
    if (complete) {
      clearTimeout(timeoutId);
      setTimerOn(false);
      setIsComplete(complete);
    }
  };

  const onClick = (e) => {
    if (!isComplete) {
      setTimerOn(true);
      const selection = e.target.innerHTML;

      let key;
      const firstUnansweredQuestion = pairs.find((pair, index) => {
        if (!pair.isCorrect) {
          key = index;
          return pair;
        }
      });
      const isCorrect = firstUnansweredQuestion.right.symbol === selection;
      isCorrect && processAnswer(key);
    }
  };

  const showAnswers = () => {
    clearTimeout(timeoutId);
    setTimerOn(false);
    setTimer(0);
    setIsComplete(true);

    const updatedResult = [...pairs];
    Object.keys(updatedResult).map(
      (key) => (updatedResult[key].isCorrect = true)
    );
    setPairs(updatedResult);
  };

  return (
    <div className="view-wrapper">
      {!isLargeScreen ? MenuIcon : null}
      <div className="banner molarity-banner"></div>
      <div className="content-wrapper">
        <Typography
          variant="h4"
          component="h1"
          color="text.secondary"
          gutterBottom
        >
          DNA and RNA Base Pairs
        </Typography>
        <ButtonGroup color="secondary" sx={{ mb: 2 }}>
          <Button variant="outlined" onClick={showAnswers}>
            Answer
          </Button>
          <Button
            variant="outlined"
            endIcon={<SkipNextIcon />}
            onClick={() => getNewProblem(isDnaOrRna)}
          >
            Next
          </Button>
        </ButtonGroup>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            {pairs
              ? pairs.map((pair, index) => (
                  <div
                    className="dna-base-pairs"
                    key={`dna-base-pairs-${index}`}
                  >
                    <div className={`dna-bases ${pair.left.key}-base`}>
                      {pair.left.symbol}
                    </div>
                    {pair.isCorrect ? (
                      <div
                        className={`dna-bases ${pair.right.symbol.toLowerCase()}-base right`}
                      >
                        {pair.right.symbol}
                      </div>
                    ) : null}
                  </div>
                ))
              : null}
          </Box>
          <Box sx={{ maxWidth: "50%", alignItems: "flex-end" }}>
            <ToggleButtonGroup
              color="primary"
              value={isDnaOrRna}
              exclusive
              onChange={toggleDnaRna}
              sx={{ width: "100%", justifyContent: "flex-end", mb: 2 }}
            >
              <ToggleButton value="DNA">DNA</ToggleButton>
              <ToggleButton value="RNA">RNA</ToggleButton>
            </ToggleButtonGroup>
            <Typography sx={{ textAlign: "right" }} variant="h5">
              What comes next?
            </Typography>
            <div className="dna-base-pairs options">
              <div className={`dna-bases a-base right`} onClick={onClick}>
                A
              </div>
            </div>
            <div className="dna-base-pairs options">
              <div className={`dna-bases c-base right`} onClick={onClick}>
                C
              </div>
            </div>
            <div className="dna-base-pairs options">
              <div className={`dna-bases g-base right`} onClick={onClick}>
                G
              </div>
            </div>
            <div className="dna-base-pairs options">
              <div
                className={`dna-bases t-base right`}
                onClick={isDnaOrRna === "DNA" ? onClick : null}
              >
                T
              </div>
            </div>
            <div className="dna-base-pairs options">
              <div
                className={`dna-bases u-base right`}
                onClick={isDnaOrRna === "RNA" ? onClick : null}
              >
                U
              </div>
            </div>
            <Typography
              sx={{ textAlign: "right" }}
              variant="h4"
              color="text.secondary"
            >
              Timer: {timer > 0 ? timer / 1000 : timer}s
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
};

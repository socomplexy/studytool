import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { HalfLifeChart } from "./HalfLifeChart";
import { HalfLife as HalfLifeProblems } from "./HalfLife";
import { Activity } from "./Activity";
import { populateDataset } from "./halfLifeCalculations";

export const HalfLife = ({ isLargeScreen, MenuIcon }) => {
  const { activity, isotope, startingWeight, timeValue, dataset } =
    populateDataset();

  const [tabView, setTabView] = useState(0);
  const updateTabView = (viewNo) => setTabView(viewNo);
  // 0 is half-life chart, 1 is half-life word problems, 2 is activity word problems

  return (
    <div className="view-wrapper">
      {!isLargeScreen ? MenuIcon : null}
      <div className="banner home-banner">
        <div className="content-wrapper">
          <Typography variant="h1" color="text.primary" gutterBottom>
            Half Life
          </Typography>
        </div>
      </div>
      <div className="content-wrapper">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={tabView}>
              <Tab label="Interpreting Data" onClick={() => updateTabView(0)} />
              <Tab
                label="Calculating Half-life"
                onClick={() => updateTabView(1)}
              />
              <Tab
                label="Calculating Activity"
                onClick={() => updateTabView(2)}
              />
            </Tabs>
          </Box>
          {tabView === 0 ? (
            <HalfLifeChart
              isLargeScreen={isLargeScreen}
              isotope={isotope}
              timeValue={timeValue}
              dataset={dataset}
            />
          ) : null}
          {tabView === 1 ? (
            <HalfLifeProblems
              isLargeScreen={isLargeScreen}
              isotope={isotope}
              timeValue={timeValue}
              dataset={dataset}
            />
          ) : null}
          {tabView === 2 ? (
            <Activity
              isLargeScreen={isLargeScreen}
              isotope={isotope}
              timeValue={timeValue}
              dataset={dataset}
            />
          ) : null}
        </Box>
      </div>
    </div>
  );
};

// activity in Bq

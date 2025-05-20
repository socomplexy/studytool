import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { PercentageChangeInfo } from "./PercentageChangeInfo";
import { PercentageChangeMnemonic } from "./PercentageChangeMnemonic";
import { PercentageChangePractice } from "./PercentageChangePractice";

export const PercentageChange = ({ isLargeScreen, MenuIcon }) => {
  const [view, setView] = useState(0);
  const updateView = (v) => setView(v);

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
          Percentage Change
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={view}>
              <Tab label="Info" onClick={() => updateView(0)} />
              <Tab label="Mnemonic" onClick={() => updateView(1)} />
              <Tab label="Practice" onClick={() => updateView(2)} />
            </Tabs>
          </Box>
          {view === 0 ? <PercentageChangeInfo /> : null}
          {view === 1 ? <PercentageChangeMnemonic /> : null}
          {view === 2 ? <PercentageChangePractice /> : null}
        </Box>
      </div>
    </div>
  );
};

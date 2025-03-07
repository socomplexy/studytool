import * as React from "react";
import { LineChart as MuiLineChart, axisClasses } from "@mui/x-charts";

export const LineChart = ({ dataset, isLargeScreen }) => {
  return (
    <MuiLineChart
      dataset={dataset}
      xAxis={[
        {
          dataKey: "x",
          label: "Time passed (hours)",
        },
      ]}
      yAxis={[{ label: "Weight (grams)" }]}
      series={[
        {
          dataKey: "y",
          area: true,
          baseline: "min",
          curve: "natural",
          showMark: false,
        },
      ]}
      tooltip={{ trigger: "axis" }}
      width={isLargeScreen ? 450 : 300}
      height={isLargeScreen ? 300 : 200}
      grid={{ vertical: true, horizontal: true }}
      sx={{
        [`.${axisClasses.left} .${axisClasses.label}`]: {
          transform: "translate(-10px, 0)",
        },
      }}
    />
  );
};

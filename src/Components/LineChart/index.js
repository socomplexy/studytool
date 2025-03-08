import * as React from "react";
import { LineChart as MuiLineChart, axisClasses } from "@mui/x-charts";

export const LineChart = ({ dataset, isLargeScreen }) => {
  const activityFormatter = (y, context) =>
    context.location === "tick"
      ? y
      : `${(y * 1000).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })} Bq`;

  return (
    <MuiLineChart
      dataset={dataset}
      xAxis={[
        {
          dataKey: "x",
          label: "Time passed (hours)",
          valueFormatter: (x, context) =>
            context.location === "tick" ? `${x}` : `${x.toFixed(2)} hours`,
        },
      ]}
      yAxis={[{ label: "Activity (kBq)" }]}
      series={[
        {
          dataKey: "y",
          area: true,
          baseline: "min",
          curve: "natural",
          showMark: false,
          valueFormatter: activityFormatter,
        },
      ]}
      tooltip={{ trigger: "axis" }}
      width={isLargeScreen ? 600 : 350}
      height={isLargeScreen ? 300 : 250}
      grid={{ vertical: true, horizontal: true }}
      sx={{
        [`.${axisClasses.left} .${axisClasses.label}`]: {
          transform: "translate(-10px, 0)",
        },
      }}
    />
  );
};

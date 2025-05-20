import { Box, Typography } from "@mui/material";

export const PercentageChangeInfo = () => {
  return (
    <Box sx={{ pt: 2 }}>
      <Typography>
        Percentage change is something that is useful in all areas, not just
        biology. Simply put, is the ratio of the difference in the quantity to
        its initial value multiplied by 100. What does this look like?
      </Typography>
      <div className="percentage-change-formula" />
      <Typography>
        If the result you get is <em>negative</em>, there has been a decrease.
        And if the result you get is <em>positive</em>, there has been an
        increase.
      </Typography>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { Utils } from "../../utils";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const PunnettSquarePractice = ({}) => {
  const data = Utils.getPunnettSquare();

  return (
    <div className="view-wrapper">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Punnett Square Practice
        </Typography>
      </Box>
      <TableContainer component={Paper} sx={{ width: 300 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell
                align="right"
                sx={{ color: "#4dabf5", fontWeight: 600, fontSize: 20 }}
              >
                {data ? data.father[0] : ``}
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "#4dabf5", fontWeight: 600, fontSize: 20 }}
              >
                {data ? data.father[1] : ``}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ color: "#dd33fa", fontWeight: 600, fontSize: 20 }}
              >
                {data ? data.mother[0] : ``}
              </TableCell>
              <TableCell align="right">
                <span style={{ color: "#dd33fa" }}>
                  {data ? data.combinations[0][0] : ``}
                </span>
                <span style={{ color: "#4dabf5" }}>
                  {data ? data.combinations[0][1] : ``}
                </span>
              </TableCell>
              <TableCell align="right">
                <span style={{ color: "#dd33fa" }}>
                  {data ? data.combinations[1][0] : ``}
                </span>
                <span style={{ color: "#4dabf5" }}>
                  {data ? data.combinations[1][1] : ``}
                </span>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ color: "#dd33fa", fontWeight: 600, fontSize: 20 }}
              >
                {data ? data.mother[1] : ``}
              </TableCell>
              <TableCell align="right">
                <span style={{ color: "#dd33fa" }}>
                  {data ? data.combinations[2][0] : ``}
                </span>
                <span style={{ color: "#4dabf5" }}>
                  {data ? data.combinations[2][1] : ``}
                </span>
              </TableCell>
              <TableCell align="right">
                <span style={{ color: "#dd33fa" }}>
                  {data ? data.combinations[3][0] : ``}
                </span>
                <span style={{ color: "#4dabf5" }}>
                  {data ? data.combinations[3][1] : ``}
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

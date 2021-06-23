import React from "react";
import { useLocation } from "react-router-dom";
import "../css/bids-details.css";

import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function BidsDetails(props) {
  const classes = useStyles();
  const location = useLocation();
  let list = location.state[0].bids;
  console.log(location.state);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="BidsDetails">
      <h2>Bids Details</h2>

      <TableContainer component={Paper}>
        <div className="cuname">
          {location.state[0].firstname} {location.state[0].lastname}
        </div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="th__data">Car Title</TableCell>
              <TableCell className="th__data">Amount</TableCell>
              <TableCell className="th__data">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.carTitle}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{moment(row.created, "x").format("ll")}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={list?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default BidsDetails;

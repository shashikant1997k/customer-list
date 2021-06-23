import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
} from "@material-ui/core";
import "../css/customer-list.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function CustomerList() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [custList, seCustList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          "https://intense-tor-76305.herokuapp.com/merchants"
        );

        seCustList(res?.data);
        let temp1 = res?.data.map((v) => {
          if (v.bids.length > 0) {
            return v;
          } else {
            let bids = [
              {
                amount: 0,
              },
            ];
            return { ...v, bids };
          }
        });
        let temp = temp1.sort(
          (a, b) =>
            Math.max(...a?.bids.map((v) => v.amount)) -
            Math.max(...b?.bids.map((v) => v.amount))
        );
        setList(temp);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const [orderDir, setOrderDir] = useState("asc");

  const sortFun = (a, b, c) => {
    if (c === "max") {
      return (
        Math.max(...a?.bids.map((v) => v.amount)) -
        Math.max(...b?.bids.map((v) => v.amount))
      );
    } else if (c === "min") {
      return (
        Math.min(...a?.bids.map((v) => v.amount)) -
        Math.min(...b?.bids.map((v) => v.amount))
      );
    }
  };

  const handleSortFun = (ordDir, minMax) => {
    if (ordDir === "asc") {
      minMax === "max"
        ? list.sort((a, b) => sortFun(b, a, "max"))
        : list.sort((a, b) => sortFun(b, a, "min"));
    } else {
      minMax === "max"
        ? list.sort((a, b) => sortFun(a, b, "max"))
        : list.sort((a, b) => sortFun(a, b, "min"));
    }
  };

  const handleSort = (ev, ordDir) => {
    if (!ev.target.dataset.minmax) {
      setOrderDir(ordDir === "asc" ? "desc" : "asc");
      handleSortFun(ordDir, bidMinMax);
    }
  };

  const [bidMinMax, setBidMinMax] = useState("max");
  const handleMinMax = (ev, val) => {
    if (ev.target.dataset.minmax) {
      if (val === "min") {
        handleSortFun(orderDir === "asc" ? "desc" : "asc", "min");
        setBidMinMax(val);
        document.querySelector(".max").classList.remove("active");
        document.querySelector(".min").classList.add("active");
      } else if (val === "max") {
        handleSortFun(orderDir === "asc" ? "desc" : "asc", "max");
        setBidMinMax(val);
        document.querySelector(".min").classList.remove("active");
        document.querySelector(".max").classList.add("active");
      }
    }
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (id) => {
    let temp = custList.filter((v) => v.id === id);
    if (temp[0].bids.length > 0) {
      history.push("/bids-details", temp);
    } else {
      alert("No Data");
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="th__data">Customer name</TableCell>
              <TableCell className="th__data">Email</TableCell>
              <TableCell className="th__data">Phone</TableCell>
              <TableCell className="th__data">Premium</TableCell>

              <TableCell className="th__data" align="right">
                <TableSortLabel
                  active={true}
                  direction={orderDir}
                  onClick={(e) => handleSort(e, orderDir)}
                >
                  <div style={{ marginLeft: "10px" }}>Bid</div>
                  <span>
                    <span
                      data-minmax
                      className="max active"
                      onClick={(e) => handleMinMax(e, "max")}
                    >
                      Max
                    </span>{" "}
                    /{" "}
                    <span
                      data-minmax
                      className="min common"
                      onClick={(e) => handleMinMax(e, "min")}
                    >
                      Min
                    </span>
                  </span>
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  className="tablRow"
                  onClick={() => handleRowClick(row.id)}
                >
                  <TableCell component="th" className="name" scope="row">
                    <div className="customer">
                      <div className="avatar">
                        <Avatar alt={row.firstname} src={row.avatarUrl} />
                      </div>
                      <div className="custname">
                        {row.firstname} {row.lastname}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.hasPremium ? "Yes" : "No"}</TableCell>
                  <TableCell align="right">
                    {bidMinMax === "max"
                      ? row?.bids.length > 0
                        ? Math.max(...row?.bids.map((v) => v.amount))
                        : "0"
                      : row?.bids.length > 0
                      ? Math.min(...row?.bids.map((v) => v.amount))
                      : "0"}
                  </TableCell>
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
    </>
  );
}

export default CustomerList;

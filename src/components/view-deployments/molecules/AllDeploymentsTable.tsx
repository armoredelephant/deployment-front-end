import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { querySelector } from "../../_helper-functions/querySelector";
import { columns } from "../atoms/tableHelpers";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Column, GraphQLDeploymentData } from "../deploymentViewInterfaces";
import SpinnerContainer from "../../_containers/SpinnerContainer";
import TablePagination from "@material-ui/core/TablePagination";
import CustomTableHead from "../atoms/CustomTableHead";
import {
  stableSort,
  getSorting,
  Order
} from "../../_helper-functions/tableHelpers";
import FlexContainer from "../../_containers/FlexContainer";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 800
  }
});

const tableColumns = columns;

const AllDeploymentsTable: React.FC = () => {
  const { loading, error, data } = useQuery(querySelector("All"));
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof GraphQLDeploymentData>(
    "ticketNumber"
  );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [dense, setDense] = React.useState(false);

  // display error

  // display loading

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof GraphQLDeploymentData
  ): void => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangeDense = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDense(event.target.checked);
  };

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading) return <SpinnerContainer />;

  const { findDeployments } = data;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, findDeployments.length - page * rowsPerPage);

  return (
    <FlexContainer width="100%" flow="column">
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            size={dense ? "small" : "medium"}
            aria-label="sticky table"
          >
            <CustomTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(findDeployments, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index: number) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={`${row.ticketNumber}-${index}`}
                    >
                      {tableColumns.map((column: Column, index: number) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={`${column.label}-${index}`}
                            align={column.align}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={findDeployments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </FlexContainer>
  );
};

export default AllDeploymentsTable;
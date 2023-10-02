import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import TableHeader from '../../../components/Table/TableHeader/TableHeader';
import TableToolbar from '../../../components/Table/TableToolbar/TableToolbar';
import StyledTableCell from '../../../components/Table/StyledTableCell/StyledTableCell';
import StyledTableRow from '../../../components/Table/StyledTableRow/StyledTableRow';

import Loading from '../../../components/Loading/Loading';

import { getPlanets } from '../../../store/planet/actions';

import { ORDERS } from '../../../resources/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const PlanetsListPage = ({ planet, getPlanets }) => {
  const history = useHistory();
  const classes = useStyles();
  const [order, setOrder] = useState(ORDERS.ASC);
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  useEffect(() => {
    if (planet.fetched) {
      const customPlanets = planet.planets.map((planet, index) => {
        return {
          id: index + 1,
          name: planet.name,
          gravity: planet.gravity,
          terrain: planet.terrain,
          climate: planet.climate,
          population: planet.population,
        }
      });

      setRows(customPlanets);
    }
  }, [planet.planets, planet.fetched]);

  const stableSort = (array, comparator) => {
    const stabilized = array.map((el, index) => [el, index]);
    stabilized.sort((a, b) => {
      const order = comparator(a[0], b[0]);

      if (order !== 0) return order;
      return a[1] - b[1];
    });

    return stabilized.map((el) => el[0]);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }

    if (b[orderBy] > a[orderBy]) {
      return 1;
    }

    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === ORDERS.DESC
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const handleRequestSort = useCallback((event, property) => {
    const isAsc = orderBy === property && order === ORDERS.ASC;
    setOrder(isAsc ? ORDERS.DESC : ORDERS.ASC);
    setOrderBy(property);
  }, [order, orderBy]);

  const handleClick = useCallback((event, id) => {
    setSelected(id);
    history.push('/planet-details', { id });
  }, [history]);

  const handleChangePage = useCallback((event, newPage) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }, []);
  
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  if (!rows || rows.length === 0) return <Loading />;

  return <section>
     <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='medium'
            aria-label="table"
          >
            <TableHeader
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  
                  return (
                    <StyledTableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}               
                    >
                      <StyledTableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </StyledTableCell>
                      <StyledTableCell component="th" id={labelId} scope="row" padding="none"  align="right">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.gravity}</StyledTableCell>
                      <StyledTableCell align="right">{row.terrain}</StyledTableCell>
                      <StyledTableCell align="right">{row.climate}</StyledTableCell>
                      <StyledTableCell align="right">{row.population}</StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
    </section>;
}

const mapStatesToProps = state => ({
  planet: state.planet,
});

const mapDispatchToProps = {
  getPlanets,
};

PlanetsListPage.propTypes = {
  planet: PropTypes.object,
  getPlanets: PropTypes.func,
}

export default connect(
  mapStatesToProps,
  mapDispatchToProps,
)(PlanetsListPage);

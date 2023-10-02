import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const TableHeader = ({ classes, order, orderBy, numSelected, rowCount, onRequestSort }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
    
const HEAD_CELLS = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'gravity', numeric: false, disablePadding: false, label: 'Gravity' },
  { id: 'terrain', numeric: false, disablePadding: false, label: 'Terrain' },
  { id: 'climate', numeric: false, disablePadding: false, label: 'Climate' },
  { id: 'population', numeric: true, disablePadding: false, label: 'Population' },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#75CFDB',
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
    
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox" />
        {HEAD_CELLS.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align='right'
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default memo(TableHeader);
import React, { useMemo } from 'react'

import {
    Stack,
    Tooltip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
}    from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import SelectIcon from '@mui/icons-material/EditNote';

function createData(id, title, details, video, image, createdAt) {
  return { id, title, details, video, image, createdAt };
}

const BaseTable = ({ posts }) => {
    const rows = useMemo(() => {
        const formattedRows = [];

        posts.forEach(b => {
            const { id, title, details, video, image, createdAt } = b;
            formattedRows.push(createData(id, title, details, video, image, createdAt));
        })

        return formattedRows;
    }, []);

    return (
        <TableContainer component={Paper}>
            <h3>My Posts!</h3>
            <Stack direction="row" sx={{ float: 'left', marginLeft: 10, marginBottom: 10 }}>
                <Tooltip title="Create a new Post!">
                    <a href="/post">
                        <AddCircleIcon color="success" sx={{ width: '35px', height: '35px' }} />
                    </a>
                </Tooltip>
            </Stack>
            <Table sx={{ width: '90%', display: 'inline-table', marginTop: '30px' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell align="center">Details</TableCell>
                        <TableCell align="center">Video URL</TableCell>
                        <TableCell align="center">Image URL</TableCell>
                        <TableCell align="center">Created At</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="center">{row.details}</TableCell>
                            <TableCell align="center">{row.video}</TableCell>
                            <TableCell align="center">{row.image}</TableCell>
                            <TableCell align="center">{row.createdAt}</TableCell>
                            <TableCell align="center">
                                <Tooltip title="View the post">
                                    <a href={`post/${row.id}/view`}>
                                        <SelectIcon color="#1976d2" sx={{ width: '35px', height: '35px' }} />
                                    </a>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BaseTable;

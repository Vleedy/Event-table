import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { tableStruct } from './interfases';

interface MoreInfoTableProps {
  row: tableStruct;
  top: boolean;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&.${tableRowClasses.head}`]: {
    background: 'white',
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 11,
    padding: 5,
    textAlign: 'center',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    padding: 10,
    textAlign: 'center',
    border: 0,
  },
}));

export const MoreInfoTable: FC<MoreInfoTableProps> = ({ row, top }) => {
  return (
    <>
      <Table sx={{ minWidth: 400 }} aria-label="collapsible table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell padding="normal" align="left">
              Дата
            </StyledTableCell>
            <StyledTableCell padding="normal" align="left">
              {top ? 'Сумма' : ''}
            </StyledTableCell>
            <StyledTableCell padding="normal" align="left">
              Объём, л
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow sx={{ background: 'white' }}>
            <StyledTableCell padding="normal" align="left">
              {new Date(row.date).toLocaleString().slice(0, -3)}
            </StyledTableCell>
            <StyledTableCell padding="normal" align="left">
              {top ? row.cost : ''}
            </StyledTableCell>
            <StyledTableCell padding="normal" align="left">
              {row.tank}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </>
  );
};

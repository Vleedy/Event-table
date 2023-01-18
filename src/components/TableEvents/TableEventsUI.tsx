import React from 'react';
import { FC, useRef } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import { tableStruct } from './interfases';
import { TableEventsHeader } from './TableEventsHeader';
import { TableEventsRow } from './TableEventsRow';
import { ThemeProvider } from '@mui/material';
import { theme } from '../ControlPanel/ControlPanel';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { categoryType } from './interfases';
import { getComparator, stableSort } from './TableEvents-utils';

interface eventsProps {
  data: tableStruct[];
  searchValue: string;
  category: categoryType;
}

export type Order = 'asc' | 'desc';

export const TableEventsUI: FC<eventsProps> = ({ category, data, searchValue }) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof tableStruct>('transport');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Web Users',
    sheet: 'Web Users',
  });

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof tableStruct) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const customeFilter = (item: any) => {
    let bool = true;
    if (searchValue.length) {
      if (
        category === 'date' &&
        new Date(item[category]).toLocaleString().slice(0, -3).includes(searchValue)
      ) {
        bool = true;
      } else if (item[category].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        bool = true;
      } else {
        bool = false;
      }
    }
    return bool;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          className="export-XLSX"
          onClick={onDownload}
          sx={{ padding: 0.85, marginRight: 2 }}
          variant="outlined">
          <FileDownloadIcon /> XLSX
        </Button>
      </ThemeProvider>
      <Box sx={{ width: '96%', margin: '0  auto' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table
              ref={tableRef}
              sx={{ minWidth: 400, overflow: 'hidden', borderCollapse: 'collapse' }}
              aria-label="collapsible table">
              <TableEventsHeader
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {data.filter((item) => customeFilter(item)).length ? (
                  stableSort(data, getComparator(order, orderBy))
                    .filter((item) => customeFilter(item))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return <TableEventsRow key={row.id} labelId={labelId} row={row} />;
                    })
                ) : (
                  <TableRow>
                    <TableCell sx={{ textAlign: 'center' }} colSpan={9}>
                      Ничего не найдено
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            labelRowsPerPage="Показывать по:"
            rowsPerPage={rowsPerPage}
            labelDisplayedRows={() => ''}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};

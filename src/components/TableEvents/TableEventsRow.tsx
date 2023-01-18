import React, { FC } from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { tableStruct } from './interfases';
import { MoreInfoTable } from './MoreInfoTable';

interface TableEventsRowProps {
  labelId: string;
  row: tableStruct;
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
    padding: '1px 10px',
    border: 0,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(4n+1)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const TableEventsRow: FC<TableEventsRowProps> = ({ labelId, row }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell id={labelId} padding="normal" align="center">
          {row.transport}
        </StyledTableCell>
        <StyledTableCell id={labelId} padding="normal" align="center">
          {new Date(row.date).toLocaleString().slice(0, -3).replace(',', ' ')}
        </StyledTableCell>
        <StyledTableCell id={labelId} padding="normal" align="center">
          {row.card}
        </StyledTableCell>
        <StyledTableCell id={labelId} padding="normal" align="center">
          {row.gasStation}
        </StyledTableCell>
        <StyledTableCell id={labelId} padding="normal" align="center">
          {row.adress}
        </StyledTableCell>
        <StyledTableCell id={labelId} padding="normal" align="center">
          {row.typeOfFuel}
        </StyledTableCell>
        <StyledTableCell id={labelId} padding="normal" align="center">
          {row.tank}
        </StyledTableCell>
        <StyledTableCell id={labelId} padding="normal" align="center">
          {row.cost} ₽
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ border: 0 }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <img
                className="events__map"
                src={`https://static-maps.yandex.ru/1.x/?ll=${row.latitude},${row.longitude}&size=320,180&z=13&l=map&pt=${row.latitude},${row.longitude},pmwtm`}
                alt="map"
              />
              <div className="event__item-information-wrapper">
                <div className="event__item-information-table event__item-information-table--first">
                  <div className="event__item-inormation-header">{`Транзакция / ${row.card}`}</div>
                  <MoreInfoTable row={row} top={true} />
                </div>
                <div className="event__item-information-table event__item-information-table--second">
                  <div className="event__item-inormation-header">{`Заправки ${row.gasStation} / ${row.transport}`}</div>
                  <MoreInfoTable row={row} top={false} />
                </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </>
  );
};

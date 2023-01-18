import * as React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

interface headerLabels {
  transport: string;
  date: string;
  card: number;
  gasStation: string;
  adress: string;
  typeOfFuel: string;
  tank: number;
  cost: number;
}

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof headerLabels) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

interface HeadCell {
  id: keyof headerLabels;
  label: string;
}

type Order = 'asc' | 'desc';

const headCells: readonly HeadCell[] = [
  {
    id: 'transport',
    label: 'Транспорт',
  },
  {
    id: 'date',
    label: 'Дата',
  },
  {
    id: 'card',
    label: 'Карта',
  },
  {
    id: 'gasStation',
    label: 'АЗС',
  },
  {
    id: 'adress',
    label: 'Адрес',
  },
  {
    id: 'typeOfFuel',
    label: 'Тип топлива',
  },
  {
    id: 'tank',
    label: 'Бак, л',
  },
  {
    id: 'cost',
    label: 'Стоимость',
  },
];

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 11,
    padding: '10px 5px',
    background: 'black',
    color: 'white',
    '&:first-of-type': {
      borderTopLeftRadius: 8,
    },
    '&:last-child': {
      borderTopRightRadius: 8,
    },
    span: {
      whiteSpace: 'nowrap',
      color: 'white',
      left: 12,
      svg: {
        path: {
          color: 'white',
        },
      },
    },
  },
}));

export function TableEventsHeader(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof headerLabels) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell />
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align="center"
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontSize: 10 }}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

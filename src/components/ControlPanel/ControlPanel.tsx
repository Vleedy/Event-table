import React, { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { categoryType } from '../TableEvents/interfases';

interface ControlPanelProps {
  searchValue: string;
  setSearchValue: (str: string) => void;
  category: categoryType;
  setCategory: (category: categoryType) => void;
}

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

export const ControlPanel: FC<ControlPanelProps> = ({
  searchValue,
  setSearchValue,
  category,
  setCategory,
}) => {
  return (
    <div className="controlPanel__wrapper">
      <ThemeProvider theme={theme}>
        <FormControl sx={{ width: 160, marginRight: 2 }}>
          <InputLabel id="demo-simple-select-label">Поиск по...</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Поиск по..."
            onChange={(event) => setCategory(event.target.value as categoryType)}>
            <MenuItem value={'transport'}>Транспорту</MenuItem>
            <MenuItem value={'date'}>Дате</MenuItem>
            <MenuItem value={'card'}>Карте</MenuItem>
            <MenuItem value={'gasStation'}>АЗС</MenuItem>
            <MenuItem value={'adress'}>Адресу</MenuItem>
            <MenuItem value={'typeOfFuel'}>Типу топлива</MenuItem>
            <MenuItem value={'tank'}>Баку (л)</MenuItem>
            <MenuItem value={'cost'}>Цене</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: 160 }}
          size="small"
          id="outlined-basic"
          label={
            <div className="search">
              <SearchIcon /> Поиск...
            </div>
          }
          variant="outlined"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
      </ThemeProvider>
    </div>
  );
};

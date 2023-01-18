import React from 'react';
import { TableEvents } from './components/TableEvents/TableEvents';
import { ControlPanel } from './components/ControlPanel/ControlPanel';
import { categoryType } from './components/TableEvents/interfases';
import './App.scss';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [category, setCategory] = React.useState<categoryType>('transport');
  return (
    <div className="App">
      <ControlPanel
        category={category}
        setCategory={setCategory}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TableEvents category={category} searchValue={searchValue} />
    </div>
  );
}

export default App;

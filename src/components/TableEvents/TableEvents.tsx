import React, { useState, useEffect } from 'react';
import { table } from '../../service/api';
import { tableStruct } from './interfases';
import { Empty } from '../Empty/Empty';
import { Error } from '../Error/Error';
import { TableEventsUI } from './TableEventsUI';
import { categoryType } from './interfases';
import { responseStruct } from './interfases';
import Skeleton from './Skeleton';

interface TableEventsProps {
  searchValue: string;
  category: categoryType;
}

export const TableEvents = ({ searchValue, category }: TableEventsProps) => {
  const [data, setData] = useState<Array<tableStruct> | []>([]);
  const [emptyData, setEmptyData] = useState(false);
  const [error, setError] = useState(false);

  async function getDataTable() {
    const response: responseStruct = (await table.getTableData()) as responseStruct;
    if (response.error) {
      setError(true);
    } else if (response.empty) {
      setEmptyData(true);
    } else {
      setData(response.data);
    }
  }

  useEffect(() => {
    getDataTable();
  }, []);

  return (
    <>
      {error ? (
        <Error />
      ) : emptyData ? (
        <Empty />
      ) : data.length ? (
        <TableEventsUI category={category} searchValue={searchValue} data={data} />
      ) : (
        <Skeleton />
      )}
    </>
  );
};

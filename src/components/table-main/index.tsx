import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import TableData from "./table-data";

import { FetchTableData } from "../../interface";

interface ITableMain {
  data: FetchTableData[];
  onUpdatingRow: (arg: FetchTableData) => void;
}

function TableMain({data, onUpdatingRow}: ITableMain) {
  const [rows, setRows] = useState([...data]);

  const onUpdate = (item: FetchTableData) => {
    onUpdatingRow(item);
    setRows(prevState => prevState.map(row => (row.id === item.id ? item : row)));
  }

  const onDelete = (item: FetchTableData) => {
    setRows(prevState => prevState.filter(r => r.id !== item.id));
  };

  const onAdd = (item: FetchTableData) => {
    setRows(prevState => [...prevState, { ...item, id: uuidv4() }]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TableContainer component={Paper} sx={{mt: 5}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell>Имя компании</TableCell>
              <TableCell>Имя документа</TableCell>
              <TableCell>Статус документа</TableCell>
              <TableCell>Тип документа</TableCell>
              <TableCell>Номер сотрудника</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Имя сотрудника</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableData rows={rows} onUpdate={onUpdate} onDelete={onDelete} onAdd={onAdd}/>
          </TableBody>
        </Table>
      </TableContainer>
    </LocalizationProvider>
  );
}

export default React.memo(TableMain);
import { useState } from "react";
import moment from "moment";
import dayjs from 'dayjs';

import { Delete, Edit } from "@mui/icons-material";
import { IconButton, TableCell, TableRow } from "@mui/material";
import EditableRow from "../editable-row";

import { FetchTableData } from "../../../interface";

interface ITableData {
  rows: FetchTableData[];
  onUpdate: Function;
  onDelete: Function;
  onAdd: Function;
}

function TableData({rows, onUpdate, onDelete, onAdd}: ITableData) {
  const [editRowId, setEditRowId] = useState<null | string>(null);

  const onSave = (values: string) => {
    onUpdate(values);
    setEditRowId(null);
  };

  const onCancel = () => {
    setEditRowId(null);
  };

  const fomatDate = (date: string) => {
    return dayjs(date).format('MM-DD-YYYY в HH:mm');
  }

  return (
    <>
      {rows.map(row =>
        editRowId === row.id ? (
          <EditableRow key={row.id} row={row} onSave={onSave} onCancel={onCancel} /> 
        ) : (
          <TableRow key={row.id}>
            <TableCell>{fomatDate(row.companySigDate)}</TableCell>
            <TableCell>{row.companySignatureName}</TableCell>
            <TableCell>{row.documentName}</TableCell>
            <TableCell>{row.documentStatus}</TableCell>
            <TableCell>{row.documentType}</TableCell>
            <TableCell>{row.employeeNumber}</TableCell>
            <TableCell>{fomatDate(row.employeeSigDate)}</TableCell>
            <TableCell>{row.employeeSignatureName}</TableCell>
            <TableCell>
              <IconButton onClick={() => setEditRowId(row.id)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => onDelete(row)}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ),
      )}
      {/* <AddRow row={{ id: rows.length + 1, name: '', age: '', job: '', salary: '', city: '', country: '', company: '' }} onAdd={onAdd} /> */}
    </>
  );
}

export default TableData;
import React, { useState } from "react";

import { FetchTableData } from "../../../interface";
import { IconButton, TableCell, TableRow, TextField } from "@mui/material";
import { Cancel, Save } from "@mui/icons-material";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import dayjs from 'dayjs';

import { onInputChange, onDateChange} from "../../../utils/tableChanges";


interface IEditableRow {
  row: FetchTableData;
  onSave: Function;
  onCancel: Function;
}

function EditableRow({ row, onSave, onCancel }: IEditableRow) {
  const [values, setValues] = useState({
    ...row, 
    companySigDate: dayjs(row.companySigDate),
    employeeSigDate: dayjs(row.employeeSigDate)
  });

  return (
    <TableRow>
      <TableCell>
        <DateTimePicker
          sx={{ width: 250 }}
          label={'Дата и время'}
          value={values.companySigDate}
          onChange={(newValue) => onDateChange(newValue, 'companySigDate', setValues)}
        />
      </TableCell>
      <TableCell>
        <TextField value={values.companySignatureName} onChange={event => onInputChange(event, 'companySignatureName', setValues)} />
      </TableCell>
      <TableCell>
        <TextField value={values.documentName} onChange={event => onInputChange(event, 'documentName', setValues)} />
      </TableCell>
      <TableCell>
        <TextField value={values.documentStatus} onChange={event => onInputChange(event, 'documentStatus', setValues)} />
      </TableCell>
      <TableCell>
        <TextField value={values.documentType} onChange={event => onInputChange(event, 'documentType', setValues)} />
      </TableCell>
      <TableCell>
        <TextField value={values.employeeNumber} onChange={event => onInputChange(event, 'employeeNumber', setValues)} />
      </TableCell>
      <TableCell>
        <DateTimePicker
          sx={{ width: 250 }}
          label={'Дата и время'}
          value={values.employeeSigDate}
          onChange={(newValue) => onDateChange(newValue, 'employeeSigDate', setValues)}
        />
      </TableCell>
      <TableCell>
        <TextField value={values.employeeSignatureName} onChange={event => onInputChange(event, 'employeeSignatureName', setValues)} />
      </TableCell>
      <TableCell>
        <IconButton onClick={() => onSave(values)}>
          <Save />
        </IconButton>
        <IconButton onClick={() => onCancel()}>
          <Cancel />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default EditableRow;
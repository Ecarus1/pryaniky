import {useState} from "react";
import { Cancel, Save } from "@mui/icons-material";
import { IconButton, TableCell, TableRow, TextField } from "@mui/material";
import { FetchTableData } from "../../../interface";

interface ITableAddRow {
  row: FetchTableData
}

function TableAddRow({row}: ITableAddRow) {
  const [values, setValues] = useState(row);

  const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, name: string) => {
    const value = event.target.value;
    setValues(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <TableRow>
      <TableCell>{row.id}</TableCell>
      <TableCell>
        <TextField value={values.companySigDate} onChange={event => onInputChange(event, 'companySigDate')} />
      </TableCell>
      <TableCell>
        <TextField value={values.companySignatureName} onChange={event => onInputChange(event, 'companySignatureName')} />
      </TableCell>
      <TableCell>
        <TextField value={values.documentName} onChange={event => onInputChange(event, 'documentName')} />
      </TableCell>
      <TableCell>
        <TextField value={values.documentStatus} onChange={event => onInputChange(event, 'documentStatus')} />
      </TableCell>
      <TableCell>
        <TextField value={values.documentType} onChange={event => onInputChange(event, 'documentType')} />
      </TableCell>
      <TableCell>
        <TextField value={values.employeeNumber} onChange={event => onInputChange(event, 'employeeNumber')} />
      </TableCell>
      <TableCell>
        <TextField value={values.employeeSigDate} onChange={event => onInputChange(event, 'employeeSigDate')} />
      </TableCell>
      <TableCell>
        <TextField value={values.employeeSignatureName} onChange={event => onInputChange(event, 'employeeSignatureName')} />
      </TableCell>
      <TableCell>
        {/* <IconButton onClick={() => onAdd(values)}>
          <Save />
        </IconButton>
        <IconButton onClick={() => setValues(row)}>
          <Cancel />
        </IconButton> */}
      </TableCell>
    </TableRow>
  );
}

export default TableAddRow;
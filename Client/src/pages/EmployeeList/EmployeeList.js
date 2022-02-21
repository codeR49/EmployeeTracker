import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'alsid', headerName: 'ALS Id', width: 100 },
  { field: 'firstName', headerName: 'Client', width: 130 },
  { field: 'lastName', headerName: 'Candidate name', width: 130 },
  {
    field: 'opningbalance',
    headerName: 'Op Bal',
    type: 'number',
    width: 100,
  },
  {
    field: 'closingbalance',
    headerName: 'closingBal',
    type: 'number',
    width: 100,
  },
  {
    field: 'lop',
    headerName: 'lop',
    type: 'number',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'status',
    type: 'number',
    width: 100,
  },
  
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }} className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
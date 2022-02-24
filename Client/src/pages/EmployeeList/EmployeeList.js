import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';
import DevelopmentUrl from "../../data/api";
import "./EmployeeList.css"

const columns = [
  { field: 'id', headerName: 'Sl.', walsIDth: 30 },
  { field: 'alsID', headerName: 'ALS ID', walsIDth: 50 },
  { field: 'client', headerName: 'Client', width: 130 },
  { field: 'candidateName', headerName: 'Candidate name', width: 130 },
  { field: 'openingBalance', headerName: 'Opening Bal',  width: 120 },
  { field: 'leaveTaken', headerName: 'Leave Taken', width: 120 },
  { field: 'additionalSL', headerName: 'SL', width: 50 },
  { field: 'additionalEL', headerName: 'EL', width: 50 },
  { field: 'closingBalance', headerName: 'Closing Bal',  width: 120 },
  { field: 'lop', headerName: 'Lop',  width: 50 },
  { field: 'status', headerName: 'Status',  width: 100 }

];

export default function DataTable() {

  const [dataRow, setDataRow] = useState([]);

  useEffect(() => {
    Axios.get(DevelopmentUrl + '/leaves')
      .then(res => {
        setDataRow(res.data);
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }, [])

  return (
    <div style={{ height: 400, width: '100%' }} className="userList">
      <DataGrid 
        rows={dataRow}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
    </div>
  );
}
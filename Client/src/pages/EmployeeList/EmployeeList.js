import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';
import DevelopmentUrl from "../../data/api";

const columns = [
  { field: 'id', headerName: 'Sl.', walsIDth: 100 },
  { field: 'alsID', headerName: 'ALS ID', walsIDth: 100 },
  { field: 'client', headerName: 'Client', width: 130 },
  { field: 'candidateName', headerName: 'Candidate name', width: 130 },
  { field: 'openingBalance', headerName: 'Opening Bal', type: 'number', width: 100 },
  { field: 'closingBalance', headerName: 'Closing Bal', type: 'number', width: 100 },
  { field: 'lop', headerName: 'Lop', type: 'number', width: 100 },
  { field: 'status', headerName: 'Status', type: 'number', width: 100 }

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
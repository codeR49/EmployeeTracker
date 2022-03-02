import React, { useState, useEffect } from "react";
import { DataGrid ,GridToolbar} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Axios from 'axios';
import DevelopmentUrl from "../../data/api";
import "./EmployeeList.css"

const columns = [
  { field: 'id', headerName: 'Sl.No', walsIDth: 30 , headerClassName: 'abc',},
  { field: 'alsID', headerName: 'ALS ID', walsIDth: 50 ,headerClassName: 'abc'},
  { field: 'client', headerName: 'Client', width: 150 ,headerClassName: 'abc' },
  { field: 'candidateName', headerName: 'Candidate name', width: 180,headerClassName: 'abc' },
  { field: 'openingBalance', headerName: 'Opening Bal',  width: 120 ,headerClassName: 'abc'},
  { field: 'leaveTaken', headerName: 'Leave Taken', width: 120 ,headerClassName: 'abc'},
  { field: 'additionalSL', headerName: 'SL', width: 50 ,headerClassName: 'abc'},
  { field: 'additionalEL', headerName: 'EL', width: 50 ,headerClassName: 'abc'},
  { field: 'closingBalance', headerName: 'Closing Bal',  width: 150,headerClassName: 'abc' },
  { field: 'lop', headerName: 'Lop',  width: 50 ,headerClassName: 'abc'},
  { field: 'status', headerName: 'Status',  width: 150 ,headerClassName: 'abc'}

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
    <div style={{ height: 650, width: '100%' }} className="userList">
     

<Box
      sx={{
        height: 650,
        width: "100%",
        '& .abc': {
          backgroundColor: 'rgb(202 216 217)',
          fontSize:"15px",
          fontWeight:"bold"
        },
      }}
    > <DataGrid 
    rows={dataRow}
    columns={columns }
    pageSize={10}
    rowsPerPageOptions={[10]}
    checkboxSelection
    components={{ Toolbar: GridToolbar }}
    
  /></Box>
    </div>
  );
}
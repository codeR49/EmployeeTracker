import React, { useState, useEffect } from "react";
import { DataGrid ,GridToolbar,GridActionsCellItem} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import DevelopmentUrl from "../../data/api";
import "./EmployeeList.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import axios from "axios";


export default function DataTable() {
  
 const columns = [
  
    { field: 'id', headerName: 'Sl.No', walsIDth: 20 , headerClassName: 'abc',},
  
    {
      field: 'action',
      headerName: 'Actions',
      sortable: false,
      walsIDth: 50 ,
      headerClassName: 'abc',
      renderCell: () => {
        return (
          <>
           <GridActionsCellItem
                icon={<EditIcon />}
                className="textPrimary"
                color="primary"
              />
              <GridActionsCellItem
                icon={<DeleteIcon />}
                className="textPrimary"
                color="primary"
                onClick={deleteUser}
              />
          </>
        );
      },
    },
    { field: 'alsID', headerName: 'ALS ID', walsIDth: 50 ,headerClassName: 'abc'},
    { field: 'client', headerName: 'Client', width: 150 ,headerClassName: 'abc', editable:"true" },
    { field: 'candidateName', headerName: 'Candidate name', width: 180,headerClassName: 'abc' },
    { field: 'openingBalance', headerName: 'Opening Bal',  width: 120 ,headerClassName: 'abc'},
    { field: 'leaveTaken', headerName: 'Leave Taken', width: 120 ,headerClassName: 'abc'},
    { field: 'additionalSL', headerName: 'SL', width: 50 ,headerClassName: 'abc'},
    { field: 'additionalEL', headerName: 'EL', width: 50 ,headerClassName: 'abc'},
    { field: 'closingBalance', headerName: 'Closing Bal',  width: 150,headerClassName: 'abc' },
    { field: 'lop', headerName: 'Lop',  width: 50 ,headerClassName: 'abc'},
    { field: 'status', headerName: 'Status',  width: 150 ,headerClassName: 'abc'}
  
  ];

 

  const [status, setStatus] = useState();

 const deleteUser = ()=>{
    axios.delete(DevelopmentUrl + "/leaves/alsid")
    .then(()=> {
      
      setStatus('Delete successful');
      setDataRow()
    })
    .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

}
  
  const [dataRow, setDataRow] = useState([]);
  useEffect(() => {
    axios.get(DevelopmentUrl + '/leaves')
      .then(res => {
        setDataRow(res.data);
     
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }, [])

  return (
    <div style={{ height: 650, width: '100%' }} className="userList">
     
<h1>{status}</h1>
<Box
      sx={{
        height: 650,
        width: "100%",
         boxShadow: 2,
    
        '& .abc': {
          backgroundColor: 'rgb(202 216 217)',
          fontSize:"15px",
          fontWeight:"bold"
        },
        '& .cold': {
          
          color: 'red',
        },
        '& .hot': {
          height:'40px',
          
          color: 'blue',
        },

      }}
    >
       <DataGrid 
    rows={dataRow}
    
    columns={columns }
    pageSize={100}
    rowsPerPageOptions={[100]}
    checkboxSelection
    components={{ Toolbar: GridToolbar }}
    getCellClassName={(params) => {
      if (params.field === 'status') {
        return params.value === 'Active' ? 'hot' : 'cold';
      }
     return ''
    }}
    
  /></Box>
    </div>
  );
}
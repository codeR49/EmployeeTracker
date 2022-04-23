import React, { useState, useEffect, useMemo, useRef } from "react";

import "../../EmployeeList/EmployeeList.css"

import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import DevelopmentUrl from "../../../data/api"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import axios from "axios";

import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextareaAutosize } from "@material-ui/core";


export default function ReviewEmployee() {
    
  
  const column = [
    

    { field: 'id', headerName: 'Sl.No', walsIDth: 20, headerClassName: 'abc' },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'Review',
        sortable: false,
        walsIDth: 50,
        headerClassName: 'abc',
        cellClassName: 'actions',
        
        renderCell: () => {
          return (
            <>
           
              <GridActionsCellItem
              className="textPrimary"
              color="primary"
              icon={<EditIcon  />}
              onClick={handleClickOpen}          
            />
              
      
             
            </>
          );
        },
      },
    { field: 'alsID', headerName: 'ALS ID', walsIDth: 50, headerClassName: 'abc' },

    { field: 'client', headerName: 'Client', width: 150, headerClassName: 'abc', editable: "true" },
    { field: 'candidateName', headerName: 'Candidate name', width: 180, headerClassName: 'abc' },
    { field: 'openingBalance', headerName: 'Opening Bal', width: 120, headerClassName: 'abc' },
    { field: 'leaveTaken', headerName: 'Leave Taken', width: 120, headerClassName: 'abc' },
    { field: 'additionalSL', headerName: 'SL', width: 50, headerClassName: 'abc' },
    { field: 'additionalEL', headerName: 'EL', width: 50, headerClassName: 'abc' },
    { field: 'closingBalance', headerName: 'Closing Bal', width: 150, headerClassName: 'abc' },
    { field: 'lop', headerName: 'Lop', width: 50, headerClassName: 'abc' },
    { field: 'status', headerName: 'Status', width: 150, headerClassName: 'abc' }

  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [rows, setDataRow] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get(DevelopmentUrl + '/leaves/getall', {
      headers: {
        "Content-Type": "text/plain",
        "Authorization": `bearer ${token}`
      }
    })
      .then(res => {
        setDataRow(res.data);
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }, [])

  return (
    <div style={{ height: 650, width: '100%' }} className="userList">

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Review Comments</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Please Write  your Valuable Comments For Review here. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Review"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Approve</Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          height: 650,
          width: "100%",
          boxShadow: 2,

          '& .abc': {
            backgroundColor: 'rgb(202 216 217)',
            fontSize: "15px",
            fontWeight: "bold"
          },
          '& .cold': {

            color: 'red',
          },
          '& .hot': {
            height: '40px',

            color: 'blue',
          },

        }}
      >
        <DataGrid
          rows={rows}

          columns={column}
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


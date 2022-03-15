import React, { useState, useEffect } from "react";
import { DataGrid ,GridToolbar} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Axios from 'axios';
import DevelopmentUrl from "../../data/api";
import "../EmployeeList/EmployeeList.css"

const columns = [
  { field: 'id', headerName: 'Sl.No', walsIDth: 30 , headerClassName: 'abc',},
  { field: 'B', headerName: 'Status',  width: 150 ,headerClassName: 'abc'},
  { field: 'C', headerName: 'ALS ID', walsIDth: 50 ,headerClassName: 'abc'},
  { field: 'D', headerName: 'Client', width: 150 ,headerClassName: 'abc' },
  { field: 'E', headerName: 'Client-LOB', width: 150 ,headerClassName: 'abc' },
  { field: 'F', headerName: 'Candidate name', width: 180,headerClassName: 'abc' },
  { field: 'G', headerName: 'DOJ', width: 150 ,headerClassName: 'abc' },
  { field: 'H', headerName: 'DOC', width: 150 ,headerClassName: 'abc' },
  { field: 'I', headerName: 'LWD', width: 150 ,headerClassName: 'abc' },
  { field: 'J', headerName: 'Probation', width: 150 ,headerClassName: 'abc' },
  { field: 'K', headerName: 'El Amount', width: 150 ,headerClassName: 'abc' },
  { field: 'L', headerName: 'El Eligibility', width: 150 ,headerClassName: 'abc' },
  { field: 'M', headerName: 'Basic', width: 150 ,headerClassName: 'abc' },
  { field: 'N', headerName: 'Gross Salary', width: 150 ,headerClassName: 'abc' },
  { field: 'O', headerName: 'Opening Bal',  width: 120 ,headerClassName: 'abc'},
  { field: 'P', headerName: 'Leave Taken', width: 120 ,headerClassName: 'abc'},
  { field: 'Q', headerName: 'SL', width: 50 ,headerClassName: 'abc'},
  { field: 'R', headerName: 'EL', width: 50 ,headerClassName: 'abc'},
  { field: 'S', headerName: 'Closing Bal',  width: 150,headerClassName: 'abc' },
  { field: 'T', headerName: 'Lop',  width: 50 ,headerClassName: 'abc'},
  { field: 'Y', headerName: 'Remarks', width: 150 ,headerClassName: 'abc' },

];

export default function  ExcelData() {

  const [dataRow, setDataRow] = useState([]);

  useEffect(() => {
    Axios.get(DevelopmentUrl + '/exceldata/leave')
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

// import React, { useState, useEffect } from 'react';
// import { DataGrid ,GridToolbar} from '@mui/x-data-grid';
// import Box from '@mui/material/Box';
// import Axios from 'axios';
// import DevelopmentUrl from "../../data/api";
// import "../EmployeeList/EmployeeList.css"

// const json = 
//     [
//         {
//             "A": 1,
//             "B": "ACTIVE",
//             "C": "ALS/8057",
//             "D": "C0000621",
//             "E": "ALL-STATE",
//             "F": "NAVEEN",
//             "G": "2019-02-03T18:29:50.000Z",
//             "J": "6 Months",
//             "K": 0,
//             "M": 30000,
//             "N": 30000,
//             "O": 6,
//             "P": 10,
//             "Q": 1,
//             "R": 1,
//             "S": -2,
//             "T": 2,
//             "U": 0,
//             "X": 0,
//             "Y": "As per New Ploicy 2nd Aug'21"
//         },
//         {
//             "A": 2,
//             "B": "ACTIVE",
//             "C": "ALS/10223",
//             "E": "IBM",
//             "J": "9 Months",
//             "K": 0,
//             "O": 6,
//             "P": 0,
//             "Q": 0,
//             "R": 1.75,
//             "S": 7.75,
//             "T": 0,
//             "U": 7.75,
//             "X": 7.75,
//             "Y": "As per Old Ploicy (Encash is Part of CTC)"
//         },
//         {
//             "A": 3,
//             "O": 6,
//             "P": 1.75,
//             "Q": 0,
//             "R": 1.75,
//             "S": 6,
//             "T": 0,
//             "U": 6,
//             "X": 6,
//             "Y": "As per Ploicy - CWF (monthly -EL)"
//         }
//     ]

// const header = ["S No", "Status", "ALS ID", "CLIENT", "CLIENT- LOB", "CANDIDATE NAME", "DOJ", "DOC", "LWD", "PROBATION PERIOD",
//     "EL Amount CTC", "EL ELIGIBILITY", "Basic", "Gross Salary", " Op Bal", " Leave Taken"," Addition SL"," Addition EL", "Closing Balance", 
//     "LOP", 
//     "Remarks"];
// function ExcelData() {
//     const [dataRow, setDataRow] = useState([]);

//     useEffect(() => {
//         Axios.get(DevelopmentUrl + '/exceldata/leave')
//             .then(res => {
//                 setDataRow(res.data);
//                 //console.log(res.data);
//             })
//             .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

//     }, [])
    
//     return (
//         <div className="newUser">
//             <table>
//                 <thead>
//                     <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
//                 </thead>
//                 <tbody>
//                     {Object.keys(json).map((k, i) => {
//                         let data = json[k];
//                         console.log(data);
//                         return (
//                             <tr key={i}>
//                                 <td>{data.A}</td>
//                                 <td>{data.B}</td>
//                                 <td>{data.C}</td>
//                                 <td>{data.D}</td>
//                                 <td>{data.E}</td>
//                                 <td>{data.F}</td>
//                                 <td>{data.G}</td>
//                                 <td>{data.H}</td>
//                                 <td>{data.I}</td>
//                                 <td>{data.J}</td>
//                                 <td>{data.K}</td>
//                                 <td>{data.L}</td>
//                                 <td>{data.M}</td>
//                                 <td>{data.N}</td>
//                                 <td>{data.O}</td>
//                                 <td>{data.P}</td>
//                                 <td>{data.Q}</td>
//                                 <td>{data.R}</td>
//                                 <td>{data.S}</td>
//                                 <td>{data.T}</td>
//                                 <td>{data.Y}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// }



// export default ExcelData
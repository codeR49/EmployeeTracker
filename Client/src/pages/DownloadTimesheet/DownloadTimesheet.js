import React, { useState, useEffect } from "react";
import "../Timesheet/Timesheet.css";
import DevelopmentUrl from "../../data/api";
import axios from 'axios';



export default function DownloadTimesheet() {
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);
  const [timesheet, setTimesheet] = useState([]);
  const [clientId, setClient] = useState("");
  const [month, setMonth] = useState("");
  const [download, setDownload] = useState([]);
  const [status, setStatus] = useState(false);
  

  useEffect(() => {
    axios.get(DevelopmentUrl + `/mis/timesheet`)
      .then((res) => {

        setTimesheet(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  function refreshPage() {
    window.location.reload();
  }
  // console.log(timesheet);

 
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? '' : 'none',
//         }}>
//         <h3 style={{ color: "rgb(0, 111, 139)" }}>Timesheet submited Successfully !!</h3>
//       </div>
//     );
//   };
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? '' : 'none',
//         }}>
//         <h4 >Please enter <sup style={{ color: "red" }}>*</sup> fields</h4>
//       </div>
//     );
//   };

  let handleClientChange = (e) => {
    setClient(e.target.value)
    console.log(clientId);
  }
  
  let handleMonthChange = (e) => {
    setMonth(e.target.value)
  }
 
    
    // useEffect(() => {
    //     axios.get(DevelopmentUrl + `/mis/download`)
    //       .then((res) => {
    
    //         setDownload(res.data)
    //         console.log(res.data)
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })
    //   }, [])

    //   .then((res) => {

    //     console.log(res)
        
    //   }

    //   ).catch(err => {
    //     console.log(err)
    //   })

    const update = () => {
        axios
            .get(DevelopmentUrl + `/mis/download/${clientId}/${month}`)
            .then((res) => {
                setDownload(res.data);
                setStatus(true);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
              })
    };

    useEffect(update, []);

  return (
    <div className="newUser">
      <div style={{ display: "flex" }}>
        <h3 className="newUserTitle" style={{ color: "darkblue" }}>View Timesheet</h3>

      </div>

        <div className="newUserForm">
        <div className="newUserItem">
        <label>Client Id <sup style={{ color: "red" }}>*</sup></label>
          <select name="clientId" onChange={handleClientChange} style={{height: "42px"}}>
            <option> -- Select Client -- </option>
      
            {timesheet.map((item) => <option value={item.value}>{item.label}</option>)}
          </select>
         
        </div>

        <div className="newUserItem" >
          <label>Month <sup style={{ color: "red" }}>*</sup></label>
          <input type="month" name="month" placeholder="choose Month" onChange={handleMonthChange} required />
        </div>
        {!status ? (
        <button className="newUserButton" onClick={update}>View</button>
      ) : <>
        {download != "Timesheet Not Found" ? <button style={{width: "120px", border: "none", color: "white" , padding: "7px 10px", fontWeight: "800", borderRadius: "10px", marginTop: "40px", cursor: "pointer"}}><a href={DevelopmentUrl + `/uploads/${download.fileName.slice(8)}`} rel="noreferrer" target="_blank">Download</a> </button>
        : <p style={{color: "red", marginTop: "50px"}}>{download}</p>}
      </>
        
      }
        
        
       </div>
       <button className="newUserButton" onClick={ refreshPage }>View Other Timesheet!</button>
      {/* {errorMessage()}
      {successMessage()} */}
    </div >
  );
}
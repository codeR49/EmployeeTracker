import React, { useState, useEffect } from "react";
import "../Timesheet/Timesheet.css";
import DevelopmentUrl from "../../data/api";
import axios from 'axios';



export default function Timesheet() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [timesheet, setTimesheet] = useState([]);
  const [clientId, setClient] = useState("");
  const [uploadDate, setUploadDate] = useState("");
  const [month, setMonth] = useState("");
  const [file, setFile] = useState(null);

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

  // console.log(timesheet);

 
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h3 style={{ color: "rgb(0, 111, 139)" }}>Timesheet submited Successfully !!</h3>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h4 >Please enter <sup style={{ color: "red" }}>*</sup> fields</h4>
      </div>
    );
  };

  let handleClientChange = (e) => {
    setClient(e.target.value)
    console.log(clientId);
  }
  let handleDateChange = (e) => {
    setUploadDate(e.target.value)
  }
  let handleMonthChange = (e) => {
    setMonth(e.target.value)
  }
  let handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const timesheetFormSubmit = (e) => {

    e.preventDefault()
    const formData = new FormData();
    formData.append("clientId", clientId);
    formData.append("uploadDate", uploadDate);
    formData.append("month", month);
    formData.append("file", file);

    axios.post(DevelopmentUrl + `/mis/upload`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      }
    })

      .then((res) => {

        console.log(res)
        console.log(formData)
        if (res.status === 200) {
          console.log(formData)
        }
        alert("Timesheet Added Successfully")
      }

      ).catch(err => {
        console.log(err)
      })

  }

  return (
    <div className="newUser">
      <div style={{ display: "flex" }}>
        <h3 className="newUserTitle" style={{ color: "darkblue" }}>Add Timesheet</h3>

      </div>

      <form className="newUserForm" onSubmit={timesheetFormSubmit}>

        <div className="newUserItem">
        <label>Client Id <sup style={{ color: "red" }}>*</sup></label>
          <select name="clientId" onChange={handleClientChange} style={{height: "42px"}}>
            <option> -- Select Client -- </option>
      
            {timesheet.map((item) => <option value={item.value}>{item.label}</option>)}
          </select>
         
        </div>

        <div className="newUserItem" >
          <label>Upload Date <sup style={{ color: "red" }}>*</sup></label>
          <input type="date" name="uploadDate" placeholder="choose date" onChange={handleDateChange} required />
        </div>

        <div className="newUserItem" >
          <label>Month <sup style={{ color: "red" }}>*</sup></label>
          <input type="month" name="month" placeholder="choose Month" onChange={handleMonthChange} required />
        </div>
        <div className="newUserItem" >
          <label>Timesheet File <sup style={{ color: "red" }}>*</sup></label>
          
        <input type="file" name="file" placeholder="Upload your timesheet" onChange={handleFileChange} required />
        <h6 style={{color: "red"}}>Upload Only CSV File</h6>
        </div>


        <button type="submit" className="newUserButton" >Submit </button>


      </form >
      {errorMessage()}
      {successMessage()}
    </div >
  );






}
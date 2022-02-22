import React, { useState } from "react";
import "./Trackerform.css";
import DevelopmentUrl from "../../data/api";
import Axios from 'axios';


export default function TrackerForm() {

  const [currentMonthYear, setCurrentMonthYear] = useState('');
  const [status, setStatus] = useState('');
  const [alsID, setAlsID] = useState('');
  const [client, setClient] = useState('');
  const [clientLob, setClientLob] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [dateOfC, setDateOfC] = useState('');
  const [lastWorkingDate, setLastWorkingDate] = useState('');
  const [probationPeriod, setProbationPeriod] = useState('');
  const [elAmount, setElAmount] = useState(0);
  const [elEligibility, setElEligibility] = useState(0);
  const [basic, setBasic] = useState(0);
  const [grossSalary, setGrossSalary] = useState(0);
  const [openingBalance, setOpeningBalance] = useState(0);
  const [leaveTaken, setLeaveTaken] = useState(0);
  const [additionalSL, setAdditionalSL] = useState(0);
  const [additionalEL, setAdditionalEL] = useState(0);
  const [closingBalance, setClosingBalance] = useState(0);
  const [lop, setLop] = useState(0);

  let onchangemonthyearhandler = (event) => {
    setCurrentMonthYear(event.target.value);
  }
  let onchangestatushandler = (event) => {
    setStatus(event.target.value);
  }
  let onchangealsidhandler = (event) => {
    setAlsID(event.target.value);
  }
  let onchangeclienthandler = (event) => {
    setClient(event.target.value);
  }
  let onchangeclientlobhandler = (event) => {
    setClientLob(event.target.value);
  }
  let onchangecandidatenamehandler = (event) => {
    setCandidateName(event.target.value);
  }
  let onchangedateofjoininghandler = (event) => {
    setDateOfJoining(event.target.value);
  }
  let onchangedateofchandler = (event) => {
    setDateOfC(event.target.value);
  }
  let onchangelastworkingdatehandler = (event) => {
    setLastWorkingDate(event.target.value);
  }
  let onchangeprobationperiodhandler = (event) => {
    setProbationPeriod(event.target.value);
  }
  let onchangeelamounthandler = (event) => {
    setElAmount(event.target.value);
  }
  let onchangeeleligibilityhandler = (event) => {
    setElEligibility(event.target.value);
  }
  let onchangebasichandler = (event) => {
    setBasic(event.target.value);
  }
  let onchangegrosssalaryhandler = (event) => {
    setGrossSalary(event.target.value);
  }
  let onchangeleavetakenhandler = (event) => {
    setLeaveTaken(event.target.value);
  }
  let onchangeopeningbalancehandler = (event) => {
    setOpeningBalance(event.target.value);
  }
  let onchangeadditionalslhandler = (event) => {
    setAdditionalSL(event.target.value);
  }
  let onchangeadditionalelhandler = (event) => {
    setAdditionalEL(event.target.value);
  }
  // let onchangesetclosingbalancehandler = (event) => {
  //   setClosingBalance(event.target.value);
  // }
  let onchangelophandler = (event) => {
    setLop(event.target.value);
  }

  let submithandler = (event) => {
    event.preventDefault();
    let formdata = {
      currentMonthYear: currentMonthYear,
      status: status,
      alsID: alsID,
      client: client,
      clientLob: clientLob,
      candidateName: candidateName,
      dateOfJoining: dateOfJoining,
      dateOfC: dateOfC,
      lastWorkingDate: lastWorkingDate,
      probationPeriod: probationPeriod,
      elAmount: elAmount,
      elEligibility: elEligibility,
      basic: basic,
      grossSalary: grossSalary,
      openingBalance: openingBalance,
      leaveTaken: leaveTaken,
      additionalSL: additionalSL,
      additionalEL: additionalEL,
      closingBalance: closingBalance,
      lop: lop

    };
    Axios.post(DevelopmentUrl + '/leaves', formdata).then(
      (res) => {
        let { data } = res;
        console.log(data);

      }
    ).catch(error => {
      console.log("error occured")
      console.log(error.data)
    })
  }

  return (
    <div className="newUser">
      <div style={{ display: "flex" }}>
        <h3 className="newUserTitle">Add Employee Details</h3>
        <form className="newUserForm1" >
          <div className="newUserItem1" onChange={onchangemonthyearhandler}>
            <label>Select Year and  Month <sup style={{ color: "red" }}>*</sup>&nbsp;&nbsp;</label>
            <input type="date" id="myDate" placeholder=" select Date" required="true" />
          </div>
        </form>
      </div>

      <form className="newUserForm">
        <div className="newUserItem">
          <label>Status <sup style={{ color: "red" }}>*</sup></label>
          <select className="newUserSelect" name="active" id="active" onChange={onchangestatushandler} required>
            <option>Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="newUserItem" onChange={onchangealsidhandler}>
          <label>ALS Id <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="ALS Id" required="true" />
        </div>
        <div className="newUserItem" onChange={onchangeclienthandler}>
          <label>Client <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Client" required="true" />
        </div>
        <div className="newUserItem" onChange={onchangeclientlobhandler}>
          <label>Client Lob <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Client Lob" required="true" />
        </div>

        <div className="newUserItem" onChange={onchangecandidatenamehandler}>
          <label>Candidate Name <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Candidate Name" required="true" />
        </div>
        <div className="newUserItem" onChange={onchangedateofjoininghandler}>
          <label>DOJ <sup style={{ color: "red" }}>*</sup></label>
          <input type="date" id="myDate" placeholder=" select Date" required="true" />
        </div>
        <div className="newUserItem" onChange={onchangedateofchandler}>
          <label>DOC</label>
          <input type="date" id="myDate" placeholder="-- -- -- -- --" />
        </div>
        <div className="newUserItem" onChange={onchangelastworkingdatehandler}>
          <label>last Working Day </label>
          <input type="date" placeholder="Batch Monitor" />
        </div>

        <div className="newUserItem" onChange={onchangeprobationperiodhandler}>
          <label>Prob Period <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Prob Period" required="true" />
        </div>

        <div className="newUserItem" onChange={onchangeelamounthandler}>
          <label>El Amount as per CTC</label>
          <input type="text" placeholder="El Amount as per CTC" />
        </div>


        <div className="newUserItem" onChange={onchangeeleligibilityhandler}>
          <label>El Eligibility</label>
          <input type="text" placeholder="El Eligibility" />
        </div>
        <div className="newUserItem" onChange={onchangebasichandler}>
          <label>Basic Salary <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Basic" required="true" />
        </div>
        <div className="newUserItem" onChange={onchangegrosssalaryhandler}>
          <label>Gross Salary <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Gross Salary" required="true" />
        </div>

        <div className="newUserItem" onChange={onchangeopeningbalancehandler}>
          <label>Op Bal <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Op Bal" required="true" />
        </div>

        <div className="newUserItem" onChange={onchangeleavetakenhandler}>
          <label>Leave Taken <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Leave Taken" required="true" />
        </div>

        <div className="newUserItem" onChange={onchangeadditionalslhandler}>
          <label>Addition Sl <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Addition Sl" required="true" />
        </div>

        <div className="newUserItem" onChange={onchangeadditionalelhandler}>
          <label>Addition El <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Addition El" required="true" />
        </div>
        {/* <div className="newUserItem" onChange={onchangesetclosingbalancehandler}>
          <label>Closing Balance</label>
          <input type="text" placeholder="Closing Balance" />
        </div> */}
        <div className="newUserItem" onChange={onchangelophandler}>
          <label>Lop <sup style={{ color: "red" }}>*</sup></label>
          <input type="text" placeholder="Lop" required="true" />
        </div>

        <button type="submit" className="newUserButton" onClick={submithandler}>Create</button>
      </form>
    </div>
  );






}

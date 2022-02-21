import React ,{useState } from "react";
import "./Trackerform.css";


   
    

export default function TrackerForm() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [total, setTotal] = useState(number1 + number2+number3);

  function calculateTotal(e) {
    setTotal((number1 + number2+number3)-number4);
    e.preventDefault();
  }
  return (
    <div className="newUser">
      <div style={{display:"flex"}}>
      <h3 className="newUserTitle">Add Employee Details</h3>
      <form className="newUserForm1" >
      <div className="newUserItem1">
          <label>Select Year and  Month &nbsp;&nbsp;</label>
          <input type="date" id="myDate" placeholder=" select Date" />
        </div>
      </form>
      </div>
     
      <form className="newUserForm">
      <div className="newUserItem">
          <label>Status</label>
          <select className="newUserSelect" name="active" id="active" >
            <option value="Active">Active</option>
            <option value="Incative">Inactive</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>ALS Id</label>
          <input type="text" placeholder="ALS Id"/>
        </div>
        <div className="newUserItem">
          <label>Client</label>
          <input type="text" placeholder="Client"  />
        </div>
        <div className="newUserItem">
          <label>Client Lob</label>
          <input type="text" placeholder="Client Lob" />
        </div>
        
        <div className="newUserItem">
          <label>Candidate Name</label>
          <input type="text" placeholder="Candidate Name" />
        </div>
        <div className="newUserItem">
          <label>DOJ</label>
          <input type="date" id="myDate" placeholder=" select Date"  />
        </div>
        <div className="newUserItem">
          <label>DOC</label>
          <input type="date" id="myDate" placeholder="-- -- -- -- --" />
        </div>
        <div className="newUserItem">
          <label>last Working Day </label>
          <input type="date" placeholder="Batch Monitor" />
        </div>
        
        <div className="newUserItem">
          <label>Prob Period</label>
          <input type="text" placeholder="Prob Period" />
        </div>

        <div className="newUserItem">
          <label>El Amount as per CTC</label>
          <input type="text" placeholder="El Amount as per CTC" />
        </div>

        
        <div className="newUserItem">
          <label>El Eligibility</label>
          <input type="text" placeholder="El Eligibility" />
        </div>
        <div className="newUserItem">
          <label>Basic</label>
          <input type="text" placeholder="Basic" />
        </div>
        <div className="newUserItem">
          <label>Gross Salary</label>
          <input type="text" placeholder="Gross Salary" />
        </div>

        <div className="newUserItem">
          <label>Op Bal</label>
          <input type="text" placeholder="Op Bal"  value={number1}
          onChange={(e) => setNumber1(+e.target.value)} />
        </div>

        <div className="newUserItem">
          <label>Leave Taken</label>
          <input type="text" placeholder="Leave Taken" value={number4}
          onChange={(e) => setNumber4(+e.target.value)} />
        </div>

        <div className="newUserItem">
          <label>Addition Sl</label>
          <input type="text" placeholder="Addition Sl"   value={number2}
          onChange={(e) => setNumber2(+e.target.value)}  />
        </div>

        <div className="newUserItem">
          <label>Addition El</label>
          <input type="text" placeholder="Addition El"  value={number3}
          onChange={(e) => setNumber3(+e.target.value)} onClick={calculateTotal} />
        </div>
        <div className="newUserItem">
          <label>Closing Balance</label>
          <input type="text" placeholder="Closing Balance"  readOnly   value={total}
          onChange={(e) => setTotal(+e.target.value)}   />
        </div>
        <div className="newUserItem">
          <label>Lop</label>
          <input type="text" placeholder="Lop" />
        </div>
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        
        <button className="newUserButton" onClick={calculateTotal}>Create</button>
      </form>
    </div>
  );
  



  

}

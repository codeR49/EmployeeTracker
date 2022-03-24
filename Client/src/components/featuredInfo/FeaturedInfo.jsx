import React, {useState, useEffect} from "react";
import "./featuredInfo.css";
import DevelopmentUrl from "../../data/api";
import axios from "axios";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {

  const [currentDay, setCurrentDay] = useState('');
  const [totalEmployee, setTotalEmployee] = useState(''); 
  const [currentMonth, setCurrentMonth] = useState(''); 
  const [countTotalInactive, setCountTotalInactive] = useState('');
  
  useEffect(() => {
    axios.get(DevelopmentUrl + '/leaves/countemployees')
      .then(res => {
        setCurrentDay(res.data.currentDay);
        setTotalEmployee(res.data.totalEmployees);
        setCurrentMonth(res.data.currentMonth);
        setCountTotalInactive(res.data.countTotalInactive);
        console.log(res.data);
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }, [])
   return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle" style={{color:"darkblue"}}>Total Employees</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalEmployee}</span>
          <span className="featuredMoneyRate" style={{marginLeft:"140px" ,color:"gray",borderBottom: "1px solid red"}}>
            {currentDay}
            
          </span>
         
          
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>



      <div className="featuredItem">
        <span className="featuredTitle" style={{color:"darkblue"}}>Total Employee Added last month</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{currentMonth}</span>
          <span className="featuredMoneyRate" style={{marginLeft:"140px" ,color:"gray",borderBottom: "1px solid red"}}>
            {currentDay}
          </span>
        </div>
        {/* <span className="featuredSub">Employee of last month</span> */}
      </div>



      <div className="featuredItem">
        <span className="featuredTitle" style={{color:"darkblue"}}>Total Inactive Employees</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" style={{color:"red"}}>{countTotalInactive}</span>
          <span className="featuredMoneyRate" style={{marginLeft:"140px" ,color:"gray" ,borderBottom: "1px solid red"}}>
            {currentDay}
          </span>
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
    </div>
  );
}

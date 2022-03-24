import React ,{useEffect,useState} from "react";
import "./widgetLg.css";
import DevelopmentUrl from "../../data/api";
import axios from "axios";
export default function WidgetLg() {
  const [activeEmployeesName, setActiveEmployeesName] = useState([]);

  useEffect(() => {
    axios.get(DevelopmentUrl + '/leaves/inactiveemployees')
      .then(res => {
        setActiveEmployeesName(res.data.inactive);
        
        // console.log(res.data);
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }, [])
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle" style={{color:"darkblue"}}>Inactive Employees</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
        <th className="widgetLgTh" style={{color:"darkblue"}}>Als Id</th>
          <th className="widgetLgTh" style={{color:"darkblue"}}>Employee Name</th>
      
          <th className="widgetLgTh" style={{color:"darkblue"}}>Probation Period</th>
         
        </tr>
        {activeEmployeesName.map((name)=>(
          <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgDate">{name.alsID}</span>
          </td>
          <td className="widgetLgDate">{name.candidateName}</td>
          <td className="widgetLgAmount">{name.probationPeriod}</td>
         
        </tr>
        ))}
       
      </table>
    </div>
  );
}

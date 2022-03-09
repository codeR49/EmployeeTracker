import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ExcelData from "./pages/ExcelData/ExcelData"
import Trackeremp from "./pages/TrackerEmp/TrackerEmp";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import TrackerEditForm from "./pages/TrackerEditForm/TrackerEditForm";


function App() {
  return (
    <>
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
       
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
         
         
         
          <Route path="/tracker">
            {/* <TrackerForm /> */}
            <Trackeremp/>
          </Route>
          <Route path="/employeedetails">
            <EmployeeList/>
          </Route>
          <Route path="/exceldata">
            <ExcelData/>
          </Route>
          <Route path="/updateemployee/:leaveID">
            <TrackerEditForm/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
    
  );
}

export default App;

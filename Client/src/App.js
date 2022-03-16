import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Trackeremp from "./pages/TrackerEmp/TrackerEmp";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import Home from "./pages/home/Home";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";



function App() {
  return (
    <>
    <Router>
      {/* <Topbar /> */}
      <div className="container">
        {/* <Sidebar /> */}
       
        
      </div>
      <Switch>
          {/* <Route exact path="/">
            <Home/>
          </Route> */}
          <Route exact path="/sigin">
            <Signin/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
         
         
         
          {/* <Route path="/addnewemp">
            <TrackerForm />
            <Trackeremp/>
          </Route> */}
          <Route path="/employeedetails">
            <EmployeeList/>
          </Route>
          {/* <Route path="/exceldata">
            <ExcelData/>
          </Route> */}
         
        </Switch>
    </Router>
    </>
    
  );
}

export default App;

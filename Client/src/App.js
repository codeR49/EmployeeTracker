import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Trackeremp from "./pages/TrackerEmp/TrackerEmp";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import Home from "./pages/home/Home";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import AdminSidebar from "./components/admin/adminsidebar";
import ReviewEmployee from "./pages/Admin/ReviewEmployee/ReviewEmployee";
import Report from "./pages/Report/Report"
import AdminReport from "./pages/Admin/ReviewEmployee/AdminReport/AdminReport"
import Timesheet from "./pages/Timesheet/Timesheet";
import DownloadTimesheet from "./pages/DownloadTimesheet/DownloadTimesheet";

function App() {
  return (
    <>
      <Router>
        {/* <Topbar /> */}
        <div className="container">



          <Switch>

            <Route exact path="/">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>


            <Route exact path="/dashboard">
              <Sidebar />
              <Home />

            </Route>
            <Route path="/addnewemp">
              <Sidebar />
              <Trackeremp />

            </Route>
            
            {/* <Route path="/report">
              <Sidebar />
              <Report />

            </Route> */}

            <Route path="/employeedetails">
              <Sidebar />
              <EmployeeList />
            </Route>
            <Route path="/timesheet">
              <Sidebar />
              <Timesheet />
            </Route>
            {/* <Route path="/viewtimesheet">
              <Sidebar />
              <ViewTimesheet />
            </Route> */}
            <Route path="/downloadtimesheet">
              <Sidebar />
              <DownloadTimesheet />
            </Route>
            {/* for admin Route */}


            <Route path="/admin/dashboard">
              <AdminSidebar />
              <Home />
            </Route>
            <Route path="/admin/emplyeedetails">
              <AdminSidebar />
              <ReviewEmployee />
            </Route>
           
          </Switch>
          {/* <Route path="/admin/report">
          <AdminSidebar />
              <AdminReport />

            </Route> */}

        </div>
      </Router>
    </>

  );
}

export default App;

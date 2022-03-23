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

            <Route path="/employeedetails">
              <Sidebar />
              <EmployeeList />
            </Route>


            {/* for admin Route */}


            <Route path="/adminsidebar">
              <AdminSidebar />

            </Route>
            <Route path="/admin/emplyeedetails">
              <AdminSidebar />
              <ReviewEmployee />
            </Route>
          </Switch>


        </div>
      </Router>
    </>

  );
}

export default App;

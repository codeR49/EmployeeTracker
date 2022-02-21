import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Batch from "./pages/Batch/Batch";
import NewBatch from "./pages/Trackerform/Trackerform";
import SignUp from "./pages/Auth/Signup";
import SignIn from "./pages/Auth/Login";
import TrackerForm from "./pages/Trackerform/Trackerform";
import Trackeremp from "./pages/TrackerEmp/TrackerEmp";
import EmployeeList from "./pages/EmployeeList/EmployeeList";


function App() {
  return (
    <>
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
       
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          {/* <Route exact path="/signin">
            <SignIn   />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route> */}
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/batch">
            <Batch />
          </Route>
          <Route path="/newbatch">
            <NewBatch />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/tracker">
            {/* <TrackerForm /> */}
            <Trackeremp/>
          </Route>
          <Route path="/employeedetails">
            <EmployeeList/>
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
    
  );
}

export default App;

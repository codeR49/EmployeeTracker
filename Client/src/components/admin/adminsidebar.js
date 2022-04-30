import "./adminsidebar.css";
import {
  LineStyle,
  Storefront,
  PermIdentity,

} from "@material-ui/icons";
// import SummarizeIcon from '@mui/icons-material/Summarize';
import { Link } from "react-router-dom";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Topbar from "../topbar/Topbar";

export default function AdminSidebar() {

  const logout = () => {
    localStorage.clear();
  }

  return (
    <div className="sidebar">
      <Topbar/>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin/dashboard" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li> */}
            {/* <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            {/* <Link to="/addnewemp" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Add New Employee 
              </li>
            </Link> */}
            <Link to="/admin/emplyeedetails" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Employee Review
              </li>
            </Link>


            {/* <Link to="/admin/report" className="link">
              <li className="sidebarListItem">
                <SummarizeIcon className="sidebarIcon" />
               Report
              </li>
            </Link> */}


            {/* <Link to="/exceldata" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Excel Data
              </li>
            </Link> */}
             <Link to="/" className="link" onClick={logout}>
              <li className="sidebarListItem">
                <LogoutOutlinedIcon className="sidebarIcon" />
                Logout
              </li>
            </Link>

          </ul>
        </div>

        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

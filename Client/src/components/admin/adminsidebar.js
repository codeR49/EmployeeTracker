import "./adminsidebar.css";
import {
  LineStyle,
  Storefront,
  PermIdentity,

} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
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
                Employee Details
              </li>
            </Link>

            {/* <Link to="/exceldata" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Excel Data
              </li>
            </Link> */}
             <Link to="/" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
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

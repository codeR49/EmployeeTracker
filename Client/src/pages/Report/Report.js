import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AddNewEmployee from "../AddNewEmployee/AddNewEmployee";
import Box from '@mui/material/Box';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "../EmployeeList/EmployeeList.css"
import Mis from "../../components/mis/Mis"
import Attrition from "../../components/attrition/Attrition";
import Active from "../../components/active/Active";

function Report() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="newUser">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label=" Mis" value="1" />
              <Tab label="Active" value="2" />
              <Tab label="Attrition" value="3" />

            </TabList>
          </Box>
          <TabPanel value="1">
            <Mis />
          </TabPanel>
          <TabPanel value="2">
            <Active />
          </TabPanel>
          <TabPanel value="3">
            <Attrition />

          </TabPanel>

        </TabContext>
      </Box>


    </div>
  );
}

export default Report
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AddNewEmployee from "../AddNewEmployee/AddNewEmployee";
import Box from '@mui/material/Box';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import  UploadExcell  from "../UploadExcell/UploadExcell";
import "../EmployeeList/EmployeeList.css"


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
       <h1>This is Mis</h1>
        </TabPanel>
        <TabPanel value="2">  
        <h1>This is ACTIVE</h1>
        
        </TabPanel>
        <TabPanel value="3">  
        <h1>This is Attrition</h1>
        
        </TabPanel>
        
      </TabContext>
    </Box>
    
    </div>
  );
}

export default Report
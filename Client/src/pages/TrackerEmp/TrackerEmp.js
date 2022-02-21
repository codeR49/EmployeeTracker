import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import TrackerForm from "../Trackerform/Trackerform";
import Box from '@mui/material/Box';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import  TrackerExcell  from "../TrackerExcell/TrackerExcell";

export default function Trackeremp() {
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
            <Tab label=" Add Employee Details" value="1" />
            <Tab label="Upload Excell Data" value="2" />
           
          </TabList>
        </Box>
        <TabPanel value="1">
        <TrackerForm/>
        </TabPanel>
        <TabPanel value="2">  
        
        <TrackerExcell/>
        </TabPanel>
        
      </TabContext>
    </Box>
    </div>
  );
};
  

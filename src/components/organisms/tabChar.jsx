import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import AccordionItem from '../molecules/accordionItem.jsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const TabChar = ({getEvaluationAmount}) =>{

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    return(
        <>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="PROTEGE TU AUTO" {...a11yProps(0)} />
                <Tab disabled={true} label="PROTEGE A LOS QUE TE RODEAN" {...a11yProps(1)} />
                <Tab disabled={true} label="MEJORA TU PLAN" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel className="d-SidesR" value={value} index={0}>
                <AccordionItem evaluateAmountAction={getEvaluationAmount}/>
            </TabPanel>
            <TabPanel className="d-SidesR" value={value} index={1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </TabPanel>
            <TabPanel className="d-SidesR" value={value} index={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </TabPanel>
        </>
    );
}
export default TabChar
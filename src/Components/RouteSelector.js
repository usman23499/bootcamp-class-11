import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth:450,
    margin:"0 auto",
    marginTop:'20px',
  },
  Link:{
    textDecoration:"none",
   
  },
  
});

export default function CenteredTabs() {
  const classes = useStyles();
 
 

  return (
      
    <Paper className={classes.root}>
       
      <Tabs textColor="primary" centered >
          
              
               <Link to="/" className={classes.Link} > 
               <Tab label="HOME" />  

               </Link>

               <Link to="/products" className={classes.Link}  > 
               <Tab label="PRODUCTS" />      
                        
               </Link>
               

            
        
       
       
      </Tabs>
    </Paper>
  );
}

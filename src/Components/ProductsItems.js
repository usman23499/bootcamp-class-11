import {useParams } from "react-router-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Data from "./data.json"
import './../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
 
   marginTop:"30px",
   
   
   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   

  },
}));

function ProductsItem() {
  const classes = useStyles();
  const {id} = useParams();

  // console.log(id);

  if(!Data[id]){

    return(

      <h1>Page Not Found</h1>
    );

    // if unnkowan request tu page not found aajae (products/asdsadas)
  }


    return (
      <div className="maindiv">
      <Grid className={classes.root} >
        <Grid  xs={12}>
          <Paper className={classes.paper}>
            
          <img src={Data[id].img} alt="Items page Image" width="50%" />
          <br />
          <h3>{Data[id].name}</h3>
          
          </Paper>
        </Grid>
      </Grid>
    </div>
    );
  }
  
  export default ProductsItem;




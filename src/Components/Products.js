import Data from "./data.json"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import {Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    
    marginLeft:"20px",
    marginTop:"50px",
    marginRight:"20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 180,
  },
  Link:{
    textDecoration:"none",
   
  },

  main:{

    
  },

}));



export default function FullWidthGrid() {

  // console.log(Data);


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

      {Object.keys(Data).map((value,index)=>{

        // console.log(Data[value])

        let setdata=Data[value]
        // phir se set kardea take easy hojae

        return(

         
           
          <Grid className={classes.main} item xs={12} sm={4}  key={index} >

            
          <Card  >
          <Link  className={classes.Link} to={`/products/${value}`} >
             {/* this is send the key of the product */}
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={setdata.img}
         
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {setdata.name}
          </Typography>
         
        </CardContent>
      </CardActionArea>

      </Link>
   
    </Card>

        </Grid>




        );



      })}



        



      </Grid>




    </div>
  );
}

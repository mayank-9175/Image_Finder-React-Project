import React from 'react';
import {Box,makeStyles,Grid} from "@material-ui/core";
const usestyles=makeStyles({
  image:{
      width:400,
      height:200,
      marginTop:10,
      objectFit:"cover",
      marginLeft:10
  }
})
const Images = ({data}) => {
    const classes=usestyles();
    console.log(data)
   return (
      <Grid container>
         {
             data.map((elm) =>{
                return <Grid xs={4} item><img src={elm.largeImageURL} className={classes.image}/></Grid>
             })
         }
      </Grid>
   )
}
export default Images;
import React from 'react';
import {Box,TextField,makeStyles} from "@material-ui/core";
const styles=makeStyles({
    content:{
        "& > *": {
            fontSize:20,
            marginLeft:20,
            marginTop:10,
            backgroundColor:"transparent",
            color:"black",
            border:"none",
            outline:"none"
          },
    },
    box:{
        background:"#f6f6f6",
    }
})
const Search = ({onTextChange,onNumChange}) => {
    const classes=styles();
    return(
      <Box className={classes.box}>
        <TextField
          label="Search Images"
          className={classes.content}
          id="filled-basic"
          variant="filled"
          onChange={(e)=>onTextChange(e.target.value)}
        />
        <TextField
          label="Number of Images"
          className={classes.content}
          id="filled-basic"
          variant="filled"
          onChange={(e)=>onNumChange(e.target.value)}
        />
      </Box>
    )
}
export default Search;
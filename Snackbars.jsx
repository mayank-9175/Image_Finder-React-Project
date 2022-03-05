import React from "react";
import { Snackbar, makeStyles } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
const useStyles = makeStyles({
  size: {
    fontSize: 20,
  },
});
const Snackbars = ({ open, setOpen }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      className={classes.size}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <MuiAlert severity="info" className={classes.size} onClose={handleClose}>
        Number of Images should be between 3 and 200
      </MuiAlert>
    </Snackbar>
  );
};
export default Snackbars;

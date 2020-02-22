import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  titleBox: {
    display: "flex"
  },
  title: {    
    padding: "10px 10px 30px 20px"
  },
});

const Notice = () => {
  const classes = useStyles();
  return (
    <div className = "notice">
       <Box className={classes.titleBox}>
          <Typography variant="h4" className={classes.title}>
            Notice
          </Typography>
        </Box>
    </div>
  )
};

export default Notice;
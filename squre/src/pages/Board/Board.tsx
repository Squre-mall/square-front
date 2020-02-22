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

const Board = () => {
  const classes = useStyles();
  return (
    <div className = "board">
       <Box className={classes.titleBox}>
          <Typography variant="h4" className={classes.title}>
            Board
          </Typography>
        </Box>
    </div>
  )
};

export default Board;
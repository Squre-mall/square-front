import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  contents: {
    paddingLeft: 500
    // backgroundColor: "yellow"
  },
  itemBox: {
    display: "flex",
    flexWrap: "wrap",
    width: 1000
  },
  item: {
    padding: 30
  },
  paper: {
    width: 400,
    height: 400
  }
});

const Contents = () => {
  const classes = useStyles();

  return (
    <div className={classes.contents}>
      <Typography variant="h3"> 전체 목록 </Typography>
      <Box className={classes.itemBox}>
        <Box className={classes.item}>
          <Paper square={false} elevation={2} className={classes.paper}>
            list1
          </Paper>
        </Box>
        <Box className={classes.item}>
          <Paper square={false} elevation={2} className={classes.paper}>
            list2
          </Paper>
        </Box>
        <Box className={classes.item}>
          <Paper square={false} elevation={2} className={classes.paper}>
            list3
          </Paper>
        </Box>
        <Box className={classes.item}>
          <Paper square={false} elevation={2} className={classes.paper}>
            list4
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default Contents;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ClothsList from "../ClothsList";

const useStyles = makeStyles({
  contents: {
    paddingLeft: 500
  }
});

const Contents = () => {
  const classes = useStyles();

  return (
    <div className={classes.contents}>
      <Typography variant="h3"> 전체 목록 </Typography>
      <ClothsList />
    </div>
  );
};

export default Contents;

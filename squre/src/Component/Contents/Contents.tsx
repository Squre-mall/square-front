import React from "react";
import ClothsList from "../ClothsList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  contents: {
    flex: 9,
    marginLeft: 350
  }
});

const Contents = () => {
  const classes = useStyles();
  return (
    <div className={classes.contents}>
      <ClothsList />
    </div>
  );
};

export default Contents;

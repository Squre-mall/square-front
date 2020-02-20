import React from "react";
import Typography from "@material-ui/core/Typography";
import ClothsList from "../ClothsList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  contents: {
    flex: 9,
    marginLeft: 350
  },
  title: {
    padding: 30
  }
});

const Contents = () => {
  const classes = useStyles();
  return (
    <div className={classes.contents}>
      <Typography variant="h4" className={classes.title}>
        ALL
      </Typography>
      <ClothsList />
    </div>
  );
};

export default Contents;

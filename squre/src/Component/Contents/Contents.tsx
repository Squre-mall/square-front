import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Notice from "../../pages/Notice";
import Board from "../../pages/Board";
import ClothsContainer from "../../Container/ClothsContainer";

const useStyles = makeStyles({
  contents: {
    flex: 9,
    marginLeft: 320
  }
});

const Contents = () => {
  const classes = useStyles();
  return (
    <div className={classes.contents}>
      <ClothsContainer />
      <Switch>
        <Route path="/square-front/Notice" component={Notice} />
        <Route path="/square-front/Board" component={Board} />
      </Switch>
    </div>
  );
};

export default Contents;

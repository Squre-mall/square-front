import React from "react";
import ClothsList from "../ClothsList";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Notice from "../../pages/Notice";
import Board from "../../pages/Board";

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
      <Switch>
        <Route path="/Notice" component = {Notice} />
        <Route path="/Board" component = {Board} />
      </Switch>
    </div>
  );
};

export default Contents;

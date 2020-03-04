import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Notice from "../../pages/Notice";
import Board from "../../pages/Board";
import ClothsContainer from "../../Container/ClothsContainer";
import Detail from "../../pages/Detail";
import Brand from "../../pages/Brand";
import Category from "../../pages/Category";

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
      <Switch>
        <Route exact path="/square-front/" component={ClothsContainer} />
        <Route exact path="/square-front/:category" component={Category} />
        <Route exact path="/square-front/notice" component={Notice} />
        <Route exact path="/square-front/board" component={Board} />
        <Route exact path="/square-front/detail/:id" component={Detail} />
        <Route exact path="/square-front/brand/:brand" component={Brand} />
      </Switch>
    </div>
  );
};

export default Contents;

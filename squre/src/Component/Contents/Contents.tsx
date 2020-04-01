import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Notice from "../../pages/Notice";
import Board from "../../pages/Board";
import ClothsContainer from "../../Container/ClothsContainer";
import Brand from "../../Container/BrandContainer";
import Detail from "../../Container/DetailContainer";
import Category from "../../Container/CategoryContainer";

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
        <Route
          exact
          path="/square-front/category/:category"
          component={Category}
        />
        <Route exact path="/square-front/notice" component={Notice} />
        <Route exact path="/square-front/board" component={Board} />
        <Route exact path="/square-front/detail/:id" component={Detail} />
        <Route exact path="/square-front/brand/:brand" component={Brand} />
      </Switch>
    </div>
  );
};

export default Contents;

import React from "react";
import Header from "../../Component/Header";
import Menu from "../../Component/Menu";
import Contents from "../../Component/Contents";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  body: {
    display: "flex"
  }
});

const Layout = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.body}>
        <Menu />
        <Contents />
      </div>
    </div>
  );
};

export default Layout;

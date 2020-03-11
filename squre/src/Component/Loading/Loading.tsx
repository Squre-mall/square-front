import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import loading from "./img/loading.gif";

const useStyles = makeStyles({
  loading: {
    left: "50 %",
    top: "50 %",
    marginLeft: "350px"
  }
});

const Loading = () => {
  const styled = useStyles();
  return (
    <div className={styled.loading}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;

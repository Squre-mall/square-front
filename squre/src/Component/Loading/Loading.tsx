import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import loading from "./img/loading.gif";

const useStyles = makeStyles({
  loading: {
    padding: "0 400px"
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

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: 8
  },
  iconButton: {
    padding: 5
  }
});

const SerchInput = () => {
  const [text, setText] = useState("");
  const classes = useStyles();
  const ENTER = 13;

  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            placeholder="Search.."
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Link
            to={`/square-front/brand/${text}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
            onClick={e => setText("")}
          >
            <SearchIcon />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default SerchInput;

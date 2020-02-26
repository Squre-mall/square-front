import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Pw from "../Pw";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: 100,
    display: "flex",
    padding: "100px 0 35px"
  },
  buttonBox: {
    display: "flex",
    paddingRight: 150
  },
  button: {
    padding: "30px 5px"
  }
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Box style={{ flex: 1 }} />
      <Box style={{ paddingRight: "11em", display: "flex" }}>
        <Box className={classes.button}>
          <Button variant="outlined" size="medium" disableElevation>
            LOG IN
          </Button>
        </Box>
        <Box className={classes.button}>
          <Button variant="outlined" size="medium" disableElevation>
            JOIN US
          </Button>
        </Box>
        <Box className={classes.button}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpen(!open)}
          >
            add
          </Button>
          {open ? <Pw /> : ""}
        </Box>
      </Box>
    </div>
  );
};

export default Header;

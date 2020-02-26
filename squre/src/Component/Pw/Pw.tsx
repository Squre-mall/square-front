import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TestPost from "../TestPost";

const Pw = () => {
  const [open, setOpen] = useState(true);
  const [pw, setPw] = useState("");
  const [checkPw] = useState("square!");
  const [postOpen, setPostOpen] = useState(false);

  const handleModal = () => {
    pw === checkPw ? setPostOpen(true) : setPostOpen(false);
  };

  return (
    <div className="pwCheck">
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Only Access Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>Input password</DialogContentText>
          <TextField
            id="standard-textarea"
            label="password"
            placeholder="input password"
            multiline
            margin="dense"
            value={pw}
            onChange={e => setPw(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleModal} color="primary">
            Subscribe
          </Button>
          {postOpen ? <TestPost /> : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Pw;

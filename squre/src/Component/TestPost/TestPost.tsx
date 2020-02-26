import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  date: string;
  clothImg: any;
  price: string;
  category: number;
};

type ClothsResponse = {
  data: ClothsType[];
};

const TestPost = () => {
  const [open, setOpen] = useState(true);
  const [error, setError] = useState(null);
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [clothImg, setClothImg] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");

  const fetchClothsPost = cloths => {
    console.log({ cloths });
    try {
      axios.post("https://squaremall.pythonanywhere.com/api/", cloths);
    } catch (e) {
      setError(e);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitValue = () => {
    const cloths = {
      brand: brand,
      title: title,
      date: date,
      clothImg: clothImg,
      price: price,
      category: parseInt(category)
    };
    console.log(cloths);
    fetchClothsPost(cloths);
    setOpen(false);
  };
  if (error) return <div>error!</div>;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">POST</DialogTitle>
        <DialogContent>
          <DialogContentText>POST 해봅시다</DialogContentText>
          <TextField
            id="standard-textarea"
            label="Brand"
            placeholder="Brande"
            multiline
            margin="dense"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          />
          <br />
          <TextField
            id="standard-textarea"
            label="Title"
            placeholder="title"
            multiline
            margin="dense"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <br />
          <TextField
            id="standard-textarea"
            label="Date"
            placeholder="Date"
            multiline
            margin="dense"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <br />
          <TextField
            id="standard-textarea"
            label="ImgUrl"
            placeholder="Img url"
            multiline
            margin="dense"
            value={clothImg}
            onChange={e => setClothImg(e.target.value)}
          />
          <br />
          <TextField
            id="standard-textarea"
            label="Price"
            placeholder="Price"
            multiline
            margin="dense"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <br />
          <TextField
            id="standard-textarea"
            label="Category"
            placeholder="outer=1 , top =2, bottom =3"
            multiline
            margin="dense"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitValue} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TestPost;

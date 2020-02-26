import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  clothImg: string;
  price: string;
  category: number;
};

type ClothProps = {
  cloth: ClothsType;
};

const useStyles = makeStyles({
  root: {
    padding: 20
  },
  header: {
    display: "flex"
  },
  headerBrand: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  },
  contents: {
    display: "flex"
  },
  imgBox: {
    padding: 10
  },
  img: {
    width: 500,
    height: 600
  },
  infoBox: {
    padding: 20
  },
  title: {
    padding: 30,
    fontSize: 30
  },
  brand: {
    padding: 30,
    fontSize: 20,
    fontWeight: 500
  },
  box: {
    width: "100%",
    height: 300
  },
  detail: {
    float: "right"
  },
  subBox: {
    display: "flex"
  },
  price: {
    padding: 30,
    flex: 1
  },
  buy: {
    padding: 13
  }
});

const ClothsDetail = ({ cloth }: ClothProps) => {
  const classes = useStyles();

  return (
    <div className="detail-item">
      <Box className={classes.root}>
        <Box className={classes.header}>
          <Box className={classes.headerBrand}>{cloth.brand}</Box>
        </Box>
        <Box className={classes.contents}>
          <Box className={classes.imgBox}>
            <img
              src={cloth.clothImg}
              alt={cloth.title}
              className={classes.img}
            />
          </Box>
          <Box className={classes.infoBox}>
            <Box className={classes.box}>
              <Typography variant="h4" className={classes.detail}>
                Detail
              </Typography>
            </Box>
            <hr />
            <Box className={classes.title}> {cloth.title} </Box>
            <Box className={classes.brand}> {cloth.brand} </Box>
            <hr />
            <Box className={classes.subBox}>
              <Box className={classes.price}> {cloth.price} </Box>
              <Box className={classes.buy}>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ClothsDetail;
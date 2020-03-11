import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { ClothsItemType } from "../../Types/ClothsTypes";

const useStyles = makeStyles({
  clothItem: {
    textDecoration: "none"
  },
  item: {
    padding: 20
  },
  paper: {
    width: 300,
    height: 330
  },
  clothsImgBox: {
    height: 200,
    width: "100%",
    textAlign: "center"
  },
  clothsImg: {
    height: 200
  },
  body: {
    padding: 10
  },
  bodyHeader: {
    padding: 10,
    display: "flex"
  },
  infoBox: {},
  brand: {
    fontSize: 15,
    fontWeight: "bold",
    flex: 1
  },
  category: {
    fontSize: 15,
    fontWeight: 500,
    color: "#A4A4A4"
  },
  title: {
    fontSize: 13,
    padding: "0px 10px",
    height: 40
  },
  price: {
    display: "flex",
    fontSize: 13,
    padding: 11
  },
  original: {
    flex: 1,
    textDecoration: "line-through"
  },
  discount: {
    flex: 3
  }
});

const ClothsItem = ({
  id,
  cloth_detail_musinsa,
  productNo,
  brand,
  title,
  clothImgSuffix,
  original_price,
  discounted_price,
  category
}: ClothsItemType) => {
  const classes = useStyles();
  return (
    <div className="cloths-item">
      <Link to={`/square-front/detail/${id}`} className={classes.clothItem}>
        <Box className={classes.item}>
          <Paper square={false} elevation={2} className={classes.paper}>
            <Box>
              <Box className={classes.clothsImgBox}>
                <img
                  alt="cloths"
                  src={`https://image.msscdn.net/images/goods_img/${clothImgSuffix}`}
                  className={classes.clothsImg}
                />
              </Box>
            </Box>
            <Box className={classes.body}>
              <Box className={classes.bodyHeader}>
                <Box className={classes.brand}>{brand}</Box>
                <Box className={classes.category}> {category} </Box>
              </Box>
              <Box className={classes.title}>{title}</Box>
              <Box className={classes.infoBox}>
                <Box className={classes.price}>
                  {discounted_price !== null ? (
                    <Fragment>
                      <Box className={classes.original}> {original_price}</Box>
                      <Box className={classes.discount}>{discounted_price}</Box>
                    </Fragment>
                  ) : (
                    original_price
                  )}
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Link>
    </div>
  );
};

export default ClothsItem;

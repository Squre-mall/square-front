import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

type ClothsType = {
  id: number;
  productNo: string;
  brand: string;
  title: string;
  description: string;
  clothImgUrl: string;
  price: string;
  gender: string;
  category: string;
};
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
  infoBox: {
    display: "flex"
  },
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
    padding: 10
  },
  price: {
    fontSize: 13,
    padding: 10,
    flex: 1
  }
});

const ClothsItem = ({
  id,
  productNo,
  brand,
  title,
  description,
  clothImgUrl,
  price,
  gender,
  category
}: ClothsType) => {
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
                  src={clothImgUrl}
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
                <Box className={classes.price}>{price} 원</Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Link>
    </div>
  );
};

export default ClothsItem;

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
  description: string;
  clothImgUrl: string;
  pageUrl: string;
  price: string;
  category: string;
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
  category: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 13,
    color: "gray"
  },
  headerBrand: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 14
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
    padding: "20px 30px",
    fontSize: 30,
    fontWeight: 700
  },
  brand: {
    padding: "20px 30px",
    fontSize: 20,
    fontWeight: 500
  },
  box: {
    width: "100%",
    height: 300
  },
  detailHeader: {
    padding: "10px 30px",
    width: "100%"
  },
  detailContents: {
    fontSize: 12,
    padding: 30,
    lineHeight: "30px"
  },
  subBox: {
    display: "flex"
  },
  price: {
    padding: "10px 30px",
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
          <Box className={classes.category}> {cloth.category} </Box>
          <Box py={2}> > </Box>
          <Box className={classes.headerBrand}>{cloth.brand}</Box>
        </Box>
        <Box className={classes.contents}>
          <Box className={classes.imgBox}>
            <img
              src={cloth.clothImgUrl}
              alt={cloth.title}
              className={classes.img}
            />
          </Box>
          <Box className={classes.infoBox}>
            <Box className={classes.box}>
              <Typography variant="h4" className={classes.detailHeader}>
                Detail
              </Typography>
              <Box className={classes.detailContents}>{cloth.description}</Box>
            </Box>
            <hr />
            <Box className={classes.title}> {cloth.title} </Box>
            <Box className={classes.brand}> {cloth.brand} </Box>
            <hr />
            <Box className={classes.subBox}>
              <Box className={classes.price}> {cloth.price} 원 </Box>
              <Box className={classes.buy}>
                <a
                  href={cloth.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ClothsDetail;

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

type categoryInfo = {
  categoryNum: number;
  categoryName: string;
};

const categoryList: categoryInfo[] = [
  {
    categoryNum: 1,
    categoryName: "outer"
  },
  {
    categoryNum: 2,
    categoryName: "top"
  },
  {
    categoryNum: 3,
    categoryName: "bottom"
  }
];

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
    padding: 30,
    fontSize: 30,
    fontWeight: 700
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
  detailHeader: {
    padding: 30,
    width: "100%"
  },
  detailContents: {
    padding: 30,
    lineHeight: "30px"
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
          {categoryList
            .filter(clothsInfo => clothsInfo.categoryNum === cloth.category)
            .map(({ categoryNum, categoryName }: categoryInfo) => (
              <Box className={classes.category} key={categoryNum}>
                {categoryNum === cloth.category ? categoryName : null}
              </Box>
            ))}
          <Box py={2}> > </Box>
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
              <Typography variant="h4" className={classes.detailHeader}>
                Detail
              </Typography>
              <Box className={classes.detailContents}>
                All the colors and personalities you can’t see right through
                what I truly am you’re hurting me without noticing I’m so, so
                broke like someone just robbed me I’m no invincible I have much
                memories of getting more weaker I know I’m not loveable but you
                know what you’d have to say
              </Box>
            </Box>
            <hr />
            <Box className={classes.title}> {cloth.title} </Box>
            <Box className={classes.brand}> {cloth.brand} </Box>
            <hr />
            <Box className={classes.subBox}>
              <Box className={classes.price}> {cloth.price} </Box>
              <Box className={classes.buy}>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => alert("개발중임니다...")}
                >
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

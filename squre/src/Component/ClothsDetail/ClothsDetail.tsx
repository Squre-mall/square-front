import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";

type ClothsType = {
  id: number;
  cloth_detail_musinsa: number;
  productNo: string;
  brand: string;
  title: string;
  clothImgSuffix: string;
  original_price: string;
  discounted_price: string;
  category: string;
  gender: string;
  season: string;
  manufactured: string;
  color: string;
  description: string;
};

const useStyles = makeStyles({
  root: {
    padding: 20
  },
  headerTitle: {
    padding: "0 20px"
  },
  header: {
    display: "flex"
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
    padding: "12px 20px",
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
    padding: 10,
    width: 500,
    height: 600
  },
  img: {
    width: "100%",
    height: "100%"
  },
  infoBox: {
    padding: "10px 30px",
    width: 550,
    height: 600
  },
  box: {
    width: "100%"
  },
  detailHeader: {
    padding: "10px 30px",
    width: "100%"
  },
  detailContents: {
    fontSize: 12,
    padding: "10px 35px",
    lineHeight: "30px"
  },
  table: {
    display: "flex",
    padding: "10px 30px"
  },
  tableKey: { flex: 4 },
  tableValue: { flex: 6, fontWeight: "bold" },
  subBox: {
    display: "flex"
  },
  price: {
    padding: "20px 30px",
    flex: 1,
    display: "flex"
  },
  original: {
    flex: 1,
    textDecoration: "line-through"
  },
  discount: {
    flex: 4
  },
  buy: {
    padding: 13
  }
});

const ClothsDetail = ({
  id,
  cloth_detail_musinsa,
  productNo,
  brand,
  title,
  clothImgSuffix,
  original_price,
  discounted_price,
  category,
  gender,
  season,
  manufactured,
  color,
  description
}: ClothsType) => {
  const classes = useStyles();

  return (
    <div className="detail-item">
      <Box className={classes.root}>
        <Typography variant="h4" className={classes.headerTitle}>
          {title}
        </Typography>
        <Box className={classes.header}>
          <Box className={classes.category}>
            <Link
              to={`/square-front/${category}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              {category}
            </Link>
          </Box>
          <Box py={2}> > </Box>
          <Box className={classes.headerBrand}>
            <Link
              to={`/square-front/brand/${brand}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              {brand}
            </Link>
          </Box>
        </Box>
        <Box className={classes.contents}>
          <Box className={classes.imgBox}>
            <img
              src={`https://image.msscdn.net/images/goods_img/${clothImgSuffix}`}
              alt={title}
              className={classes.img}
            />
          </Box>
          <Box className={classes.infoBox}>
            <Box className={classes.box}>
              <Typography variant="h4" className={classes.detailHeader}>
                Detail
              </Typography>
              <Box className={classes.detailContents}>
                {description !== "NULL"
                  ? description
                  : `All the colors and personalities
              You can't see what you are, what you're in
              You're hurting me, without noticing
              I'm so bored
              Someone needs to love me

              I'm not invincible
              I have much memories of getting more weaker
              Know, I'm not lovable
              You should know what you have to say

              Come on, let's go to bed
              We gonna rock tonight away
              Who did that to you, babe?
              If you're not in the right mood to sleep, now then
              Come on let's drink and have
              Very unmanageable day
              Would you want me in babe
              `}
              </Box>
            </Box>
            <hr />
            <Box style={{ padding: "20px 0px" }}>
              <Box className={classes.table}>
                <Box className={classes.tableKey}> 브랜드명 / 품번 </Box>
                <Box className={classes.tableValue}>
                  {brand} / {productNo}
                </Box>
              </Box>
              <Box className={classes.table}>
                <Box className={classes.tableKey}> 제품명 </Box>
                <Box className={classes.tableValue}>{title}</Box>
              </Box>
              <Box className={classes.table}>
                <Box className={classes.tableKey}> gender / color </Box>
                <Box className={classes.tableValue}>
                  {gender} / {color}
                </Box>
              </Box>
              <Box className={classes.table}>
                <Box className={classes.tableKey}> 제조국 / season </Box>
                <Box className={classes.tableValue}>
                  {manufactured} / {season}
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className={classes.subBox}>
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
              <Box className={classes.buy}>
                <a
                  href={`https://store.musinsa.com/app/product/detail/${productNo}`}
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

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClothsItem from "../ClothsItem";

type ClothsPriceType = {
  original_price: string;
  discounted_price: string;
};

type ClothsType = {
  id: number;
  cloth_detail_musinsa: number;
  productNo: string;
  brand: string;
  title: string;
  clothImgSuffix: string;
  price: ClothsPriceType;
  category: string;
};

type ClothsProps = {
  title: string;
  cloths: ClothsType[];
  count: number;
};

const useStyles = makeStyles({
  itemBox: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  titleBox: {
    display: "flex"
  },
  title: {
    padding: "10px 10px 30px 20px"
  },
  listCount: {
    paddingTop: 23
  }
});

const ClothsListAll = ({ cloths, title, count }: ClothsProps) => {
  const classes = useStyles();

  console.log({ cloths });
  return (
    <div className="clothslist-all">
      <Box className={classes.titleBox}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Box className={classes.listCount}> ({count})</Box>
      </Box>
      <Box className={classes.itemBox}>
        {cloths.map(
          ({
            id,
            cloth_detail_musinsa,
            productNo,
            brand,
            title,
            clothImgSuffix,
            price,
            category
          }: ClothsType) => (
            <ClothsItem
              key={id}
              id={id}
              cloth_detail_musinsa={cloth_detail_musinsa}
              productNo={productNo}
              brand={brand}
              title={title}
              clothImgSuffix={clothImgSuffix}
              original_price={price.original_price}
              discounted_price={price.discounted_price}
              category={category}
            />
          )
        )}
      </Box>
    </div>
  );
};

export default ClothsListAll;

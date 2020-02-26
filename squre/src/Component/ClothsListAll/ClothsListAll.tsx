import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClothsItem from "../ClothsItem";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  clothImg: any;
  price: string;
  category: number;
};

type ClothsProps = {
  cloths: ClothsType[];
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
    paddingTop: "1.7em"
  }
});

const ClothsListAll = ({ cloths }: ClothsProps) => {
  const classes = useStyles();
  return (
    <div className="clothslist-all">
      <Box className={classes.titleBox}>
        <Typography variant="h4" className={classes.title}>
          All
        </Typography>
        <Box className={classes.listCount}>( {cloths.length} )</Box>
      </Box>
      <Box className={classes.itemBox}>
        {cloths.map(
          ({ id, brand, title, clothImg, price, category }: ClothsType) => (
            <ClothsItem
              key={id}
              id={id}
              brand={brand}
              title={title}
              clothImg={clothImg}
              price={price}
              category={category}
            />
          )
        )}
      </Box>
    </div>
  );
};

export default ClothsListAll;
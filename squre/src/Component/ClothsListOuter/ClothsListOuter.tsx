import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClothsItem from "../ClothsItem";

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
    paddingTop: 23
  }
});

const ClothsListOuter = ({ cloths }: ClothsProps) => {
  const classes = useStyles();
  return (
    <div className="clothslist-outer">
      <Box className={classes.titleBox}>
        <Typography variant="h4" className={classes.title}>
          Outer
        </Typography>
        <Box className={classes.listCount}>
          ({cloths.filter(clothsInfo => clothsInfo.category === "outer").length}
          )
        </Box>
      </Box>
      <Box className={classes.itemBox}>
        {cloths
          .filter(clothsInfo => clothsInfo.category === "outer")
          .map(
            ({
              id,
              brand,
              title,
              description,
              clothImgUrl,
              pageUrl,
              price,
              category
            }: ClothsType) => (
              <ClothsItem
                key={id}
                id={id}
                brand={brand}
                title={title}
                description={description}
                clothImgUrl={clothImgUrl}
                pageUrl={pageUrl}
                price={price}
                category={category}
              />
            )
          )}
      </Box>
    </div>
  );
};

export default ClothsListOuter;

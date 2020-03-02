import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClothsItem from "../ClothsItem";

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

const ClothsListTop = ({ cloths }: ClothsProps) => {
  const classes = useStyles();
  const start = 0;
  const [items, setItems] = useState(20);

  const onScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 150) {
      items === cloths.length ? setItems(cloths.length) : setItems(items + 20);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="clothslist-top">
      <Box className={classes.titleBox}>
        <Typography variant="h4" className={classes.title}>
          Top
        </Typography>
        <Box className={classes.listCount}>
          ({cloths.filter(clothsInfo => clothsInfo.category === "top").length})
        </Box>
      </Box>
      <Box className={classes.itemBox}>
        {cloths
          .filter(clothsInfo => clothsInfo.category === "top")
          .slice(start, items)
          .map(
            ({
              id,
              productNo,
              brand,
              title,
              description,
              clothImgUrl,
              price,
              gender,
              category
            }: ClothsType) => (
              <ClothsItem
                key={id}
                id={id}
                productNo={productNo}
                brand={brand}
                title={title}
                description={description}
                clothImgUrl={clothImgUrl}
                gender={gender}
                price={price}
                category={category}
              />
            )
          )}
      </Box>
    </div>
  );
};

export default ClothsListTop;

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

const ClothsListAll = ({ cloths }: ClothsProps) => {
  const start = 0;
  const [items, setItems] = useState(20);
  const classes = useStyles();

const onScroll = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    ) {
      setItems(items+20);
    }
  };
    useEffect(() => {
    window.addEventListener("scroll", onScroll);
    // 스크롤 이벤트는 꼭 삭제해줍니다!
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="clothslist-all">
      <Box className={classes.titleBox}>
        <Typography variant="h4" className={classes.title}>
          All
        </Typography>
        <Box className={classes.listCount}>({cloths.length})</Box>
      </Box>
      <Box className={classes.itemBox}>
        {cloths
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

export default ClothsListAll;

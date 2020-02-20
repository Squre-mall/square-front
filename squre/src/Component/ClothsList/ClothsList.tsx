import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ClothsItem from "../ClothsItem";
import outer_1 from "./itemImg/outer-1.png";
import outer_2 from "./itemImg/outer-2.jpg";
import top_1 from "./itemImg/top-1.jpg";
import bottom_1 from "./itemImg/bottom-1.jpg";

type ClothsType = {
  id: number;
  title: string;
  detail: string;
  date: string;
  clothsImg: any;
  price: number;
};

let id = 0;

const clothsInfo = [
  {
    id: id++,
    title: "outer-1",
    detail: "test" + id,
    date: "2020-02-18",
    clothsImg: outer_1,
    price: 150000
  },
  {
    id: id++,
    title: "outer-2",
    detail: "test" + id,
    date: "2020-02-18",
    clothsImg: outer_2,
    price: 230000
  },
  {
    id: id++,
    title: "top-1",
    detail: "test" + id,
    date: "2020-02-18",
    clothsImg: top_1,
    price: 78000
  },
  {
    id: id++,
    title: "bottom-1",
    detail: "test" + id,
    date: "2020-02-18",
    clothsImg: bottom_1,
    price: 67000
  }
];

const useStyles = makeStyles({
  itemBox: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  }
});

const clothsListInfo = clothsInfo.map(
  ({ id, title, detail, date, clothsImg, price }: ClothsType) => (
    <ClothsItem
      key={id}
      id={id}
      title={title}
      detail={detail}
      date={date}
      clothsImg={clothsImg}
      price={price}
    />
  )
);

const ClothsList = () => {
  const classes = useStyles();
  return (
    <div className="cloths-list">
      <Box className={classes.itemBox}>{clothsListInfo}</Box>
    </div>
  );
};

export default ClothsList;

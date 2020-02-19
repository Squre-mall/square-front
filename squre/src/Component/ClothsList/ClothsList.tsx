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
};

let id = 0;

const clothsInfo = [
  {
    id: id++,
    title: "outer-1",
    detail: "test" + id,
    date: "2020-02-18",
    clothsImg: outer_1
  },
  {
    id: id++,
    title: "outer-2",
    detail: "test" + id,
    date: "2020-02-18",
    clothsImg: outer_2
  },
  {
    id: id++,
    title: "top-1",
    detail: "test" + id,
    date: "2020-02-18",
    clothsImg: top_1
  },
  {
    id: id++,
    title: "bottom-1",
    detail: "test" + id,
    date: "2020-02-18",
    clothsImg: bottom_1
  }
];

const useStyles = makeStyles({
  itemBox: {
    display: "flex",
    flexWrap: "wrap",
    width: 1000
  }
});

const clothsListInfo = clothsInfo.map(
  ({ id, title, detail, date, clothsImg }: ClothsType) => (
    <ClothsItem
      key={id}
      id={id}
      title={title}
      detail={detail}
      date={date}
      clothsImg={clothsImg}
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

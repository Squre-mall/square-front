import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClothsItem from "../ClothsItem";
import outer_1 from "./itemImg/outer-1.png";
import outer_2 from "./itemImg/outer-2.jpg";
import top_1 from "./itemImg/top-1.jpg";
import bottom_1 from "./itemImg/bottom-1.jpg";
import top_2 from "./itemImg/top-2.jpg";
import bottom_2 from "./itemImg/bottom-2.jpg";
import top_3 from "./itemImg/top-3.jpg";
import { Route, Switch } from "react-router-dom";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  date: string;
  clothsImg: any;
  price: string;
  category: number;
};

const numberFormat = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const clothsInfo = [
  {
    id: 0,
    brand: "LMOOD",
    title: "미니멀 트러커 자켓 Beige",
    date: "2020-02-14",
    clothsImg: outer_1,
    price: numberFormat(179000),
    category: 1
  },
  {
    id: 1,
    brand: "LARROM.",
    title: "Base jaket",
    date: "2020-02-15",
    clothsImg: outer_2,
    price: numberFormat(81000),
    category: 1
  },
  {
    id: 2,
    brand: "SUPREME",
    title: "Supreme Box Logo T-shirts",
    date: "2020-02-15",
    clothsImg: top_1,
    price: numberFormat(190000),
    category: 2
  },
  {
    id: 3,
    brand: "GOOCCI",
    title: "Logo training pants",
    date: "2020-02-17",
    clothsImg: bottom_1,
    price: numberFormat(279000),
    category: 3
  },
  {
    id: 4,
    brand: "KANGOL",
    title: "Club L/S T-shirt 3505 BLACK",
    date: "2020-02-20",
    clothsImg: top_2,
    price: numberFormat(65000),
    category: 2
  },
  {
    id: 5,
    brand: "GUESS",
    title: "여성 M톤 틴 인디고 슈퍼스키니 청바지 데님 YG1D9053",
    date: "2020-02-21",
    clothsImg: bottom_2,
    price: numberFormat(99000),
    category: 3
  },
  {
    id: 6,
    brand: "NOMANUAL",
    title: " R.D LONG SLEEVE TEE - BLACK",
    date: "2020-02-22",
    clothsImg: top_3,
    price: numberFormat(49000),
    category: 2
  }
];

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

const clothsListInfoAll = clothsInfo
  .reverse()
  .map(({ id, title, brand, date, clothsImg, price, category }: ClothsType) => (
    <ClothsItem
      id={id}
      key={id}
      title={title}
      brand={brand}
      date={date}
      clothsImg={clothsImg}
      price={price}
      category={category}
    />
  ));

const clothsListInfoOuter = clothsInfo
  .filter(clothsInfo => clothsInfo.category === 1)
  .map(({ id, title, brand, date, clothsImg, price, category }: ClothsType) => (
    <ClothsItem
      id={id}
      key={id}
      title={title}
      brand={brand}
      date={date}
      clothsImg={clothsImg}
      price={price}
      category={category}
    />
  ));

const clothsListInfoTop = clothsInfo
  .filter(clothsInfo => clothsInfo.category === 2)
  .map(({ id, title, brand, date, clothsImg, price, category }: ClothsType) => (
    <ClothsItem
      id={id}
      key={id}
      title={title}
      brand={brand}
      date={date}
      clothsImg={clothsImg}
      price={price}
      category={category}
    />
  ));

const clothsListInfoBottom = clothsInfo
  .filter(clothsInfo => clothsInfo.category === 3)
  .map(({ id, title, brand, date, clothsImg, price, category }: ClothsType) => (
    <ClothsItem
      id={id}
      key={id}
      title={title}
      brand={brand}
      date={date}
      clothsImg={clothsImg}
      price={price}
      category={category}
    />
  ));

const ClothsList = () => {
  const classes = useStyles();
  return (
    <div className="cloths-list">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  All
                </Typography>
                <Box className={classes.listCount}>
                  ( {clothsListInfoAll.length} )
                </Box>
              </Box>
              <Box className={classes.itemBox}> {clothsListInfoAll} </Box>
            </div>
          )}
        />
        <Route
          path="/Outer"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  Outer
                </Typography>
                <Box className={classes.listCount}>
                  ( {clothsListInfoOuter.length} )
                </Box>
              </Box>
              <Box className={classes.itemBox}> {clothsListInfoOuter} </Box>
            </div>
          )}
        />
        <Route
          path="/Top"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  Top
                </Typography>
                <Box className={classes.listCount}>
                  ( {clothsListInfoTop.length} )
                </Box>
              </Box>
              <Box className={classes.itemBox}> {clothsListInfoTop} </Box>
            </div>
          )}
        />
        <Route
          path="/Bottom"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  Bottom
                </Typography>
                <Box className={classes.listCount}>
                  ( {clothsListInfoBottom.length} )
                </Box>
              </Box>
              <Box className={classes.itemBox}> {clothsListInfoBottom} </Box>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default ClothsList;

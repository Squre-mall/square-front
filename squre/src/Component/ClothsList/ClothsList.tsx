import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ClothsItem from "../ClothsItem";
import outer_1 from "./itemImg/outer-1.png";
import outer_2 from "./itemImg/outer-2.jpg";
import top_1 from "./itemImg/top-1.jpg";
import bottom_1 from "./itemImg/bottom-1.jpg";
import top_2 from "./itemImg/top-2.jpg";
import { Route, Switch } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

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
  }
];

const useStyles = makeStyles({
  itemBox: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  title: {
    padding: "30px 30px 30px 20px"
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
              <Typography variant="h4" className={classes.title}>
                ALL
              </Typography>
              <Box className={classes.itemBox}> {clothsListInfoAll} </Box>
            </div>
          )}
        />
        <Route
          path="/Outer"
          render={() => (
            <div>
              <Typography variant="h4" className={classes.title}>
                Outer
              </Typography>
              <Box className={classes.itemBox}> {clothsListInfoOuter} </Box>
            </div>
          )}
        />
        <Route
          path="/Top"
          render={() => (
            <div>
              <Typography variant="h4" className={classes.title}>
                Top
              </Typography>
              <Box className={classes.itemBox}> {clothsListInfoTop} </Box>
            </div>
          )}
        />
        <Route
          path="/Bottom"
          render={() => (
            <div>
              <Typography variant="h4" className={classes.title}>
                Bottom
              </Typography>
              <Box className={classes.itemBox}> {clothsListInfoBottom} </Box>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default ClothsList;

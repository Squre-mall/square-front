import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClothsItem from "../../Component/ClothsItem";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  date: string;
  clothImg: any;
  price: string;
  category: number;
};

type ClothsResponse = {
  data: ClothsType[];
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

const ClothsContainer = () => {
  const [cloths, setCloths] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    const fetchCloths = async () => {
      try {
        setCloths(null);
        setError(null);
        setLoading(true);

        const response: ClothsResponse = await axios(
          "http://squaremall.pythonanywhere.com/api/?format=json"
        );

        setCloths(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCloths();
  }, []);

  if (loading) return <div> data loading...</div>;
  if (error) return <div> error ! </div>;
  if (!cloths) return null;

  return (
    <div className="cloths-list">
      <Switch>
        <Route
          exact
          path="/square-front/"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  All
                </Typography>
                <Box className={classes.listCount}>( {cloths.length} )</Box>
              </Box>
              <Box className={classes.itemBox}>
                {cloths.map(
                  ({
                    id,
                    brand,
                    title,
                    date,
                    clothImg,
                    price,
                    category
                  }: ClothsType) => (
                    <ClothsItem
                      key={id}
                      id={id}
                      brand={brand}
                      date={date}
                      title={title}
                      clothImg={clothImg}
                      price={price}
                      category={category}
                    />
                  )
                )}
              </Box>
            </div>
          )}
        />
        <Route
          exact
          path="/square-front/outer"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  Outer
                </Typography>
                <Box className={classes.listCount}>
                  ({" "}
                  {
                    cloths.filter(clothsInfo => clothsInfo.category === 1)
                      .length
                  }{" "}
                  )
                </Box>
              </Box>
              <Box className={classes.itemBox}>
                {cloths
                  .filter(clothsInfo => clothsInfo.category === 1)
                  .map(
                    ({
                      id,
                      brand,
                      title,
                      date,
                      clothImg,
                      price,
                      category
                    }: ClothsType) => (
                      <ClothsItem
                        key={id}
                        id={id}
                        brand={brand}
                        date={date}
                        title={title}
                        clothImg={clothImg}
                        price={price}
                        category={category}
                      />
                    )
                  )}
              </Box>
            </div>
          )}
        />
        <Route
          exact
          path="/square-front/top"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  Top
                </Typography>
                <Box className={classes.listCount}>
                  ({" "}
                  {
                    cloths.filter(clothsInfo => clothsInfo.category === 2)
                      .length
                  }{" "}
                  )
                </Box>
              </Box>
              <Box className={classes.itemBox}>
                {cloths
                  .filter(clothsInfo => clothsInfo.category === 2)
                  .map(
                    ({
                      id,
                      brand,
                      title,
                      date,
                      clothImg,
                      price,
                      category
                    }: ClothsType) => (
                      <ClothsItem
                        key={id}
                        id={id}
                        brand={brand}
                        date={date}
                        title={title}
                        clothImg={clothImg}
                        price={price}
                        category={category}
                      />
                    )
                  )}
              </Box>
            </div>
          )}
        />
        <Route
          exact
          path="/square-front/bottom"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  Bottom
                </Typography>
                <Box className={classes.listCount}>
                  ({" "}
                  {
                    cloths.filter(clothsInfo => clothsInfo.category === 3)
                      .length
                  }{" "}
                  )
                </Box>
              </Box>
              <Box className={classes.itemBox}>
                {cloths
                  .filter(clothsInfo => clothsInfo.category === 3)
                  .map(
                    ({
                      id,
                      brand,
                      title,
                      date,
                      clothImg,
                      price,
                      category
                    }: ClothsType) => (
                      <ClothsItem
                        key={id}
                        id={id}
                        brand={brand}
                        date={date}
                        title={title}
                        clothImg={clothImg}
                        price={price}
                        category={category}
                      />
                    )
                  )}
              </Box>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default ClothsContainer;

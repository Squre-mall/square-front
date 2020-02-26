import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClothsItem from "../ClothsItem";
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

const ClothsList = () => {
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

        const response: ClothsResponse = await axios.get(
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
          path="/"
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
      </Switch>
    </div>
  );
};

export default ClothsList;

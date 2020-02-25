import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import TestItem from "../../Component/TestItem";

type ClothsResponse = {
  data: ClothsType[];
};

type ClothsType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
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

const TestAjaxContainer = () => {
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
          "https://jsonplaceholder.typicode.com/photos"
        );

        console.log(response);
        setCloths(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCloths();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div> error 발생! </div>;
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
                <Box className={classes.listCount}>
                  (
                  {
                    cloths.filter(
                      cloths =>
                        cloths.albumId === 1 ||
                        cloths.albumId === 2 ||
                        cloths.albumId === 3 ||
                        cloths.albumId === 4
                    ).length
                  }
                  )
                </Box>
              </Box>
              <Box className={classes.itemBox}>
                {cloths
                  .filter(
                    cloths =>
                      cloths.albumId === 1 ||
                      cloths.albumId === 2 ||
                      cloths.albumId === 3 ||
                      cloths.albumId === 4
                  )
                  .map(
                    ({ albumId, id, title, url, thumbnailUrl }: ClothsType) => (
                      <TestItem
                        id={id}
                        key={id}
                        title={title}
                        albumId={albumId}
                        url={url}
                        thumbnailUrl={thumbnailUrl}
                      />
                    )
                  )}
              </Box>
            </div>
          )}
        />
        <Route
          exact
          path="/outer"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  Outer
                </Typography>
                <Box className={classes.listCount}>
                  ( {cloths.filter(cloths => cloths.albumId === 2).length} )
                </Box>
              </Box>
              <Box className={classes.itemBox}>
                {cloths
                  .filter(clothsInfo => clothsInfo.albumId === 2)
                  .map(
                    ({ albumId, id, title, url, thumbnailUrl }: ClothsType) => (
                      <TestItem
                        id={id}
                        key={id}
                        title={title}
                        albumId={albumId}
                        url={url}
                        thumbnailUrl={thumbnailUrl}
                      />
                    )
                  )}
              </Box>
            </div>
          )}
        />
        <Route
          exact
          path="/top"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  Top
                </Typography>
                <Box className={classes.listCount}>
                  ( {cloths.filter(cloths => cloths.albumId === 3).length} )
                </Box>
              </Box>
              <Box className={classes.itemBox}>
                {cloths
                  .filter(clothsInfo => clothsInfo.albumId === 3)
                  .map(
                    ({ albumId, id, title, url, thumbnailUrl }: ClothsType) => (
                      <TestItem
                        id={id}
                        key={id}
                        title={title}
                        albumId={albumId}
                        url={url}
                        thumbnailUrl={thumbnailUrl}
                      />
                    )
                  )}
              </Box>
            </div>
          )}
        />
        <Route
          exact
          path="/bottom"
          render={() => (
            <div>
              <Box className={classes.titleBox}>
                <Typography variant="h4" className={classes.title}>
                  Bottom
                </Typography>
                <Box className={classes.listCount}>
                  ( {cloths.filter(cloths => cloths.albumId === 4).length} )
                </Box>
              </Box>
              <Box className={classes.itemBox}>
                {cloths
                  .filter(clothsInfo => clothsInfo.albumId === 4)
                  .map(
                    ({ albumId, id, title, url, thumbnailUrl }: ClothsType) => (
                      <TestItem
                        id={id}
                        key={id}
                        title={title}
                        albumId={albumId}
                        url={url}
                        thumbnailUrl={thumbnailUrl}
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

export default TestAjaxContainer;

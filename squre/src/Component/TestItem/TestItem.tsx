import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

type ClothsType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const useStyles = makeStyles({
  item: {
    padding: 20
  },
  paper: {
    width: 330,
    height: 330
  },
  clothsImgBox: {
    height: 200,
    width: "100%",
    textAlign: "center"
  },
  clothsImg: {
    height: 200
  },
  body: {
    padding: 10
  },
  bodyHeader: {
    padding: 10,
    display: "flex"
  },
  infoBox: {
    display: "flex"
  },
  brand: {
    fontSize: 15,
    fontWeight: "bold",
    flex: 1
  },
  category: {
    fontSize: 15,
    fontWeight: 500,
    color: "#A4A4A4"
  },
  title: {
    fontSize: 15,
    padding: 10
  },
  price: {
    fontSize: 13,
    padding: 10,
    flex: 1
  },
  date: {
    fontSize: 13,
    fontWeight: 100,
    padding: 10
  }
});

const TestItem = ({ albumId, id, title, url, thumbnailUrl }: ClothsType) => {
  const classes = useStyles();

  return (
    <div className="cloths-item">
      <Box className={classes.item}>
        <Paper square={false} elevation={2} className={classes.paper}>
          <Box>
            <Box className={classes.clothsImgBox}>
              <img
                alt="cloths"
                src={thumbnailUrl}
                className={classes.clothsImg}
              />
            </Box>
          </Box>
          <Box className={classes.body}>
            <Box className={classes.bodyHeader}>
              <Box className={classes.brand}>{albumId}</Box>
              <Box className={classes.category}>{id}</Box>
            </Box>
            <Box className={classes.title}>{title}</Box>
            <Box className={classes.infoBox}>
              <Box className={classes.price}>{id} 원</Box>
              <Box className={classes.date}>{id}</Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default TestItem;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";
import ClothsListAll from "../../Component/ClothsListAll";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ClothsDataType } from "../../Types/ContainerTypes";

const useStyles = makeStyles({
  buttonBox: {
    padding: 50
  },
  buttonUp: {
    float: "right",
    paddingRight: 200,
    paddingBottom: 50
  },
  buttonDown: {
    float: "left",
    paddingBottom: 50
  }
});
const CategoryContainer = ({ category }) => {
  const [cloths, setCloths] = useState();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/";
  const classes = useStyles();

  useEffect(() => {
    const fetchCloths = async () => {
      try {
        setError(null);
        setLoading(true);
        const response: ClothsDataType = await axios.get(clothsAPI, {
          params: { category: category, page: page }
        });
        setCloths(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
        setCount(response.data.count);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCloths();
  }, [category, page]);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="API" />;
  if (!cloths) return null;

  return (
    <div className="cloths-list">
      {cloths.length === 0 ? (
        <ClothsError text="category" />
      ) : (
        <ClothsListAll cloths={cloths} title={category} count={count} />
      )}
      <div className={classes.buttonBox}>
        {prev === null ? (
          " "
        ) : (
          <div className={classes.buttonDown}>
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={() => setPage(page - 1)}
            >
              <ArrowBackIosIcon />
            </IconButton>
          </div>
        )}
        {next === null ? (
          " "
        ) : (
          <div className={classes.buttonUp}>
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={() => setPage(page + 1)}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryContainer;

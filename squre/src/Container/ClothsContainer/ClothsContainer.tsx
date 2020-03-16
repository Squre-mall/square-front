import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import ClothsListAll from "../../Component/ClothsListAll";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
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

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
        next: null,
        prev: null,
        count: 0
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
        next: action.next,
        prev: action.prev,
        count: action.count
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
        next: null,
        prev: null,
        count: 0
      };
    default:
      throw new Error(`${action.type}`);
  }
}

const ClothsContainer = () => {
  const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/";
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
    next: null,
    prev: null,
    count: 0
  });

  useEffect(() => {
    const fetchCloths = async () => {
      dispatch({ type: "LOADING" });
      try {
        const response: ClothsDataType = await axios.get(clothsAPI, {
          params: { page: page }
        });
        dispatch({
          type: "SUCCESS",
          data: response.data.results,
          count: response.data.count,
          next: response.data.next,
          prev: response.data.previous
        });
      } catch (e) {
        dispatch({ type: "ERROR", error: e });
      }
    };

    fetchCloths();
  }, [page]);

  const { loading, data: cloths, error, count, next, prev } = state;

  if (loading) return <Loading />;
  if (error) return <ClothsError text="API" />;
  if (!cloths) return null;

  return (
    <div className="cloths-list">
      <ClothsListAll cloths={cloths} title="All" count={count} />
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

export default ClothsContainer;

import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
import Loading from "../../Component/Loading";
import ClothsBrand from "../../Component/ClothsBrand";
import SearchError from "../../Component/SearchError";
import ClothsError from "../../Component/ClothsError";
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
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const BrandContainer = ({ brand }) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const brandAPI = "https://squaremall.pythonanywhere.com/cloth/?format=json";

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
    next: null,
    prev: null,
    count: 0
  });

  useEffect(() => {
    const fetchBrand = async () => {
      dispatch({ type: "LOADING" });
      try {
        const response: ClothsDataType = await axios.get(brandAPI, {
          params: { brand: brand, page: page }
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
    fetchBrand();
  }, [brand, page]);

  const { loading, data: cloths, error, count, next, prev } = state;

  if (loading) return <Loading />;
  if (error) return <ClothsError text="Brand Search" />;
  if (!cloths) return null;
  console.log(cloths);

  return (
    <div className="cloths-brand">
      {cloths.length === 0 ? (
        <SearchError />
      ) : (
        <ClothsBrand cloths={cloths} count={count} />
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

export default BrandContainer;

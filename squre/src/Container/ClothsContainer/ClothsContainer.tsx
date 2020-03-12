import React, { useState, useEffect } from "react";
import axios from "axios";
import ClothsListAll from "../../Component/ClothsListAll";
import Loading from "../../Component/Loading";
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

const ClothsContainer = () => {
  const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/";
  const [cloths, setCloths] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const fetchCloths = async () => {
      try {
        setError(null);
        setLoading(true);

        const response: ClothsDataType = await axios.get(clothsAPI, {
          params: { page: page }
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
  }, [page]);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="API" />;
  if (!cloths) return null;

  return (
    <div className="cloths-list">
      {console.log(cloths)}
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

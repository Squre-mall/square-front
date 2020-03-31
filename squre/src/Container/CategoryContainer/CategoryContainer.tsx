import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";
import ClothsListAll from "../../Component/ClothsListAll";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { RootState } from "../../store/modules";
import { getClothsCategoryThunk } from "../../store/modules/cloths/thunk";

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
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const { data, loading, error } = useSelector(
    (state: RootState) => state.cloths.cloths
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothsCategoryThunk(page, category));
  }, [dispatch, category, page]);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="API" />;
  if (!data) return null;

  const { results: cloths, previous: prev, next, count } = data.data;
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

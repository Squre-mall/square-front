import React, { useState, useEffect, SFC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
import Loading from "../../Component/Loading";
import ClothsBrand from "../../Component/ClothsBrand";
import SearchError from "../../Component/SearchError";
import ClothsError from "../../Component/ClothsError";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { RootState } from "../../store/modules";
import { getClothsBrandThunk } from "../../store/modules/cloths/thunk";
import { BrandMatchParams } from "../../Types/RouteTypes";

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

const BrandContainer: SFC<RouteComponentProps<BrandMatchParams>> = ({
  match
}) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const brand = match.params.brand;

  const { data, loading, error } = useSelector(
    (state: RootState) => state.cloths.cloths
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothsBrandThunk(page, brand));
  }, [dispatch, brand, page]);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="Brand Search" />;
  if (!data) return null;

  const { results: cloths, previous: prev, next, count } = data.data;

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

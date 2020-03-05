import React, { useState, useEffect } from "react";
import axios from "axios";
import ClothsListAll from "../../Component/ClothsListAll";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

type ClothsPriceType = {
  original_price: string;
  discounted_price: string;
};

type ClothsType = {
  id: number;
  cloth_detail_musinsa: number;
  productNo: string;
  brand: string;
  title: string;
  clothImgSuffix: string;
  price: ClothsPriceType;
  category: string;
  created: string;
  modified: string;
};

type ClothsResponseType = {
  count: number;
  next: string;
  previous: string;
  results: ClothsType[];
};

type ClothsDataType = {
  data: ClothsResponseType;
};


const useStyles = makeStyles({
  button: {
    textAlign :"right",
    padding : "80px 300px"
  }
});

const ClothsContainer = () => {
  const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/";
  const [cloths, setCloths] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page,setPage] = useState(1);
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
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCloths();
  }, [page]);

  useEffect(() => {
    console.log(cloths);
  },[cloths]);


  if (loading) return <Loading />;
  if (error) return <ClothsError text="API" />;
  if (!cloths) return null;
  return (
    <div className="cloths-list">
      <ClothsListAll cloths={cloths} title="All" />
      <div className = {classes.button}>
        <IconButton color="secondary" aria-label="add an alarm" onClick={() => setPage(page+1)} >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ClothsContainer;

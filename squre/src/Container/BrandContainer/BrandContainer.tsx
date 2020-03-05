import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Component/Loading";
import ClothsBrand from "../../Component/ClothsBrand";
import SearchError from "../../Component/SearchError";
import ClothsError from "../../Component/ClothsError";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
  buttonBox: {
    padding : 50
  },
  buttonUp :{
    float : "right",
    paddingRight : 200,
    paddingBottom : 50
    },
  buttonDown:{
    float : "left",
    paddingBottom : 50
  }
});

const BrandContainer = ({ brand }) => {
  const [cloths, setCloths] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const classes = useStyles();
  const [next,setNext] = useState();
  const [prev, setPrev] = useState();
  const [page, setPage] = useState(1);


  const detailAPI = "https://squaremall.pythonanywhere.com/cloth/?format=json";

  useEffect(() => {
    const fetchClothsDetail = async () => {
      try {
        setCloths(null);
        setError(null);
        setLoading(true);

        const response: ClothsDataType = await axios.get(detailAPI, {
          params: { brand: brand, page : page}
        });
        setCloths(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchClothsDetail();
  }, [brand,page]);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="Brand Search" />;
  if (!cloths) return null;
  console.log(cloths);

  return (
    <div className="cloths-brand">
      {cloths.length === 0 ? <SearchError /> : <ClothsBrand cloths={cloths} />}
      <div className = {classes.buttonBox}>
        {prev === null ? " " : (<div className = {classes.buttonDown} >
          <IconButton color="secondary" aria-label="add an alarm" onClick={() => setPage(page-1)} >
            <ArrowBackIosIcon />
          </IconButton>
        </div>)
        }
        {next === null ? " " : (
        <div className = {classes.buttonUp}>
          <IconButton color="secondary" aria-label="add an alarm" onClick={() => setPage(page+1)} >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        )}
      </div>
    </div>
  );
};

export default BrandContainer;

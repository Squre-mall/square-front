import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";
import ClothsListAll from "../../Component/ClothsListAll";

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

const CategoryContainer = ({ category }) => {
  const [cloths, setCloths] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/";

  useEffect(() => {
    const fetchCloths = async () => {
      try {
        setError(null);
        setLoading(true);
        const response: ClothsDataType = await axios.get(clothsAPI, {
          params: { category: category }
        });
        setCloths(response.data.results);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCloths();
  }, [category]);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="API" />;
  if (!cloths) return null;
  console.log(cloths);

  return (
    <div className="cloths-list">
      {cloths.length === 0 ? (
        <ClothsError text="category" />
      ) : (
        <ClothsListAll cloths={cloths} title={category} />
      )}
    </div>
  );
};

export default CategoryContainer;

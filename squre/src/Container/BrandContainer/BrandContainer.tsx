import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Component/Loading";
import ClothsBrand from "../../Component/ClothsBrand";
import SearchError from "../../Component/SearchError";
import ClothsError from "../../Component/ClothsError";

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

const BrandContainer = ({ brand }) => {
  const [cloths, setCloths] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const detailAPI = "https://squaremall.pythonanywhere.com/cloth/?format=json";

  useEffect(() => {
    const fetchClothsDetail = async () => {
      try {
        setCloths(null);
        setError(null);
        setLoading(true);

        const response: ClothsDataType = await axios.get(detailAPI, {
          params: { brand: brand }
        });
        setCloths(response.data.results);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchClothsDetail();
  }, [brand]);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="Brand Search" />;
  if (!cloths) return null;
  console.log(cloths);

  return (
    <div>
      {cloths.length === 0 ? <SearchError /> : <ClothsBrand cloths={cloths} />}
    </div>
  );
};

export default BrandContainer;

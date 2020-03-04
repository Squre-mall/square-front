import React, { useState, useEffect } from "react";
import axios from "axios";
import ClothsDetail from "../../Component/ClothsDetail";
import Loading from "../../Component/Loading";
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

const DetailContainer = ({ id }) => {
  const [cloth, setCloth] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const detailAPI = "https://squaremall.pythonanywhere.com/cloth/?format=json";

  useEffect(() => {
    const fetchClothsDetail = async () => {
      try {
        setCloth(null);
        setError(null);
        setLoading(true);

        const response: ClothsDataType = await axios.get(detailAPI, {
          params: { id: id }
        });
        setCloth(response.data.results);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchClothsDetail();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="Product Detail" />;
  if (!cloth) return null;
  console.log(cloth);
  return (
    <div>
      {cloth.map(
        ({
          id,
          cloth_detail_musinsa,
          productNo,
          brand,
          title,
          clothImgSuffix,
          price,
          category
        }: ClothsType) => (
          <ClothsDetail
            key={id}
            id={id}
            cloth_detail_musinsa={cloth_detail_musinsa}
            productNo={productNo}
            brand={brand}
            title={title}
            clothImgSuffix={clothImgSuffix}
            original_price={price.original_price}
            discounted_price={price.discounted_price}
            category={category}
          />
        )
      )}
    </div>
  );
};

export default DetailContainer;

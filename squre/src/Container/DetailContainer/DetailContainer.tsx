import React, { useState, useEffect } from "react";
import axios from "axios";
import ClothsDetail from "../../Component/ClothsDetail";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";
import {
  ClothsDataType_detail,
  DetailResponseType
} from "../../Types/ContainerTypes";

const DetailContainer = ({ id }) => {
  const [cloth, setCloth] = useState();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const clothAPI = "https://squaremall.pythonanywhere.com/cloth/?format=json";

  useEffect(() => {
    const fetchClothsDetail = async () => {
      try {
        setError(null);
        setLoading(true);

        const response_cloth: ClothsDataType_detail = await axios.get(
          clothAPI,
          {
            params: { id: id }
          }
        );

        const respone_detail: DetailResponseType = await axios.get(
          `https://squaremall.pythonanywhere.com/cloth/detail/${id}`
        );

        setCloth(response_cloth.data.results);
        setDetail(respone_detail.data);
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
  cloth.push(detail);

  return (
    <div>
      <ClothsDetail
        key={cloth[0].id}
        id={cloth[0].id}
        cloth_detail_musinsa={cloth[0].cloth_detail_musinsa}
        productNo={cloth[0].productNo}
        brand={cloth[0].brand}
        title={cloth[0].title}
        clothImgSuffix={cloth[0].clothImgSuffix}
        original_price={cloth[0].price.original_price}
        discounted_price={cloth[0].price.discounted_price}
        category={cloth[0].category}
        gender={cloth[1].gender}
        season={cloth[1].season}
        color={cloth[1].color}
        manufactured={cloth[1].manufactured}
        description={cloth[1].description}
      />
    </div>
  );
};

export default DetailContainer;

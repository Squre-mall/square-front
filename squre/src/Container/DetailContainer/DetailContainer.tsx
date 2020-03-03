import React, { useState, useEffect } from "react";
import axios from "axios";
import ClothsDetail from "../../Component/ClothsDetail";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";

type ClothsType = {
  id: number;
  productNo: string;
  brand: string;
  title: string;
  description: string;
  clothImgUrl: string;
  gender: string;
  price: string;
  category: string;
};

type ClothsResponse = {
  data: ClothsType[];
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

        const response: ClothsResponse = await axios.get(detailAPI, {
          params: { id: id }
        });
        setCloth(response.data);
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

  return (
    <div>
      {cloth.map(
        ({
          id,
          productNo,
          brand,
          title,
          description,
          clothImgUrl,
          price,
          gender,
          category
        }: ClothsType) => (
          <ClothsDetail
            id={id}
            key={id}
            productNo={productNo}
            brand={brand}
            title={title}
            description={description}
            clothImgUrl={clothImgUrl}
            gender={gender}
            price={price}
            category={category}
          />
        )
      )}
    </div>
  );
};

export default DetailContainer;

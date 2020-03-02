import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Component/Loading";
import ClothsBrand from "../../Component/ClothsBrand";

type ClothsType = {
  id: number;
  productNo: string;
  brand: string;
  title: string;
  description: string;
  clothImgUrl: string;
  price: string;
  gender: string;
  category: string;
};

type ClothsResponse = {
  data: ClothsType[];
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

        const response: ClothsResponse = await axios.get(detailAPI, {
          params: { brand: brand }
        });
        setCloths(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchClothsDetail();
  }, [brand]);

  if (loading) return <Loading />;
  if (error) return <div> error ! </div>;
  if (!cloths) return null;

  return (
    <div>
      <ClothsBrand cloths={cloths} />
    </div>
  );
};

export default BrandContainer;

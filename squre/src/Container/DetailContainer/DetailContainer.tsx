import React, { useState, useEffect } from "react";
import axios from "axios";
import ClothsDetail from "../../Component/ClothsDetail";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  clothImg: any;
  price: string;
  category: number;
};

type ClothsResponse = {
  data: ClothsType;
};

const DetailContainer = ({ id }) => {
  const [cloth, setCloth] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCloths = async () => {
      try {
        setCloth(null);
        setError(null);
        setLoading(true);

        const response: ClothsResponse = await axios.get(
          `https://squaremall.pythonanywhere.com/cloth/${id}`
        );

        setCloth(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCloths();
    // eslint-disable-next-line
  }, []);

  if (loading) return <div> data loading...</div>;
  if (error) return <div> error ! </div>;
  if (!cloth) return null;

  return <ClothsDetail cloth={cloth} />;
};

export default DetailContainer;

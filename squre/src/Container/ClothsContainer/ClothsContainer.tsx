import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import ClothsListOuter from "../../Component/ClothsListOuter";
import ClothsListTop from "../../Component/ClothsListTop";
import ClothsListBottom from "../../Component/ClothsListBottom";
import ClothsListAll from "../../Component/ClothsListAll";
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

const ClothsContainer = () => {
  const [cloths, setCloths] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/";

  const fetchCloths = async () => {
    try {
      setError(null);
      setLoading(true);
      const response: ClothsDataType = await axios.get(clothsAPI);
      setCloths(response.data.results);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCloths();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="API" />;
  if (!cloths) return null;
  console.log(cloths);

  return (
    <div className="cloths-list">
      <Switch>
        <Route
          exact
          path="/square-front/"
          render={() => <ClothsListAll cloths={cloths} />}
        />
        <Route
          exact
          path="/square-front/outer"
          render={() => <ClothsListOuter cloths={cloths} />}
        />
        <Route
          exact
          path="/square-front/top"
          render={() => <ClothsListTop cloths={cloths} />}
        />
        <Route
          exact
          path="/square-front/bottom"
          render={() => <ClothsListBottom cloths={cloths} />}
        />
      </Switch>
    </div>
  );
};

export default ClothsContainer;

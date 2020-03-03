import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import ClothsListOuter from "../../Component/ClothsListOuter";
import ClothsListTop from "../../Component/ClothsListTop";
import ClothsListBottom from "../../Component/ClothsListBottom";
import ClothsListAll from "../../Component/ClothsListAll";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";

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

const ClothsContainer = () => {
  const [cloths, setCloths] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/?format=json";

  useEffect(() => {
    const fetchCloths = async () => {
      try {
        setError(null);
        setLoading(true);

        const response: ClothsResponse = await axios.get(clothsAPI);
        setCloths(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

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

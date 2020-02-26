import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import ClothsListOuter from "../../Component/ClothsListOuter";
import ClothsListTop from "../../Component/ClothsListTop";
import ClothsListBottom from "../../Component/ClothsListBottom";
import ClothsListAll from "../../Component/ClothsListAll";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  date: string;
  clothImg: any;
  price: string;
  category: number;
};

type ClothsResponse = {
  data: ClothsType[];
};

const ClothsContainer = () => {
  const [cloths, setCloths] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCloths = async () => {
      try {
        setCloths(null);
        setError(null);
        setLoading(true);

        const response: ClothsResponse = await axios(
          "https://squaremall.pythonanywhere.com/api/?format=json"
        );

        setCloths(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCloths();
  }, []);

  if (loading) return <div> data loading...</div>;
  if (error) return <div> error ! </div>;
  if (!cloths) return null;

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

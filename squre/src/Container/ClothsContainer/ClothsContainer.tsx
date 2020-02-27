import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import ClothsListOuter from "../../Component/ClothsListOuter";
import ClothsListTop from "../../Component/ClothsListTop";
import ClothsListBottom from "../../Component/ClothsListBottom";
import ClothsListAll from "../../Component/ClothsListAll";
import Loading from "../../Component/Loading";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
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

        const response: ClothsResponse = await axios.get(
          "https://squaremall.pythonanywhere.com/cloth/"
        );

        setCloths(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCloths();
  }, []);

  if (loading) return <Loading />;
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

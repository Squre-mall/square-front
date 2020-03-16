import React, { SFC } from "react";
import { RouteComponentProps } from "react-router";
import BrandContainer from "../../Container/BrandContainer";

interface MatchParams {
  brand: string;
}

const Brand: SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  return (
    <div className="detail">
      <BrandContainer brand={match.params.brand} />
    </div>
  );
};

export default Brand;

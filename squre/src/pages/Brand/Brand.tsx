import React, { SFC } from "react";
import { RouteComponentProps } from "react-router";
import BrandContainer from "../../Container/BrandContainer";

interface MatchParams {
  brand: string;
}

const Brand: SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const brandName = match.params.brand;
  return (
    <div className="detail">
      <BrandContainer brand={brandName} />
    </div>
  );
};

export default Brand;

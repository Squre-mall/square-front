import React from "react";
import BrandContainer from "../../Container/BrandContainer";

const Brand = ({ match }) => {
  return (
    <div className="detail">
      <BrandContainer brand={match.params.brand} />
    </div>
  );
};

export default Brand;

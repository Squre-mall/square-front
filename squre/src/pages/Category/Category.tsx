import React from "react";
import CategoryContainer from "../../Container/CategoryContainer";

const Category = ({ match }) => {
  return (
    <div className="category">
      <CategoryContainer category={match.params.category} />
    </div>
  );
};

export default Category;

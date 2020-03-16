import React, { SFC } from "react";
import { RouteComponentProps } from "react-router";
import CategoryContainer from "../../Container/CategoryContainer";

interface MatchParams {
  category: string;
}

const Category: SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  return (
    <div className="category">
      <CategoryContainer category={match.params.category} />
    </div>
  );
};

export default Category;

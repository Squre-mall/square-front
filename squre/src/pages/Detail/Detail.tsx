import React, { SFC } from "react";
import { RouteComponentProps } from "react-router";
import DetailContainer from "../../Container/DetailContainer";

interface MatchParams {
  id: string;
}

const Detail: SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  return (
    <div className="detail">
      <DetailContainer id={match.params.id} />
    </div>
  );
};

export default Detail;

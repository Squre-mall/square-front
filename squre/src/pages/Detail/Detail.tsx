import React from "react";
import DetailContainer from "../../Container/DetailContainer";

const Detail = ({ match }) => {
  return (
    <div className="detail">
      <DetailContainer id={match.params.id} />
    </div>
  );
};

export default Detail;

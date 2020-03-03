import React from "react";

export default function SearchError() {
  return (
    <div
      className="search-error"
      style={{ padding: "50px 100px", lineHeight: 2 }}
    >
      <h1> 찾는 결과가 없습니다.</h1>
      <h4>
        <p> 공백 및 맞춤법을 다시 한번 확인해주세요.</p>
      </h4>
      <p>
        예 ) 무신사스탠다드{" "}
        <span role="img" aria-label="allow">
          👉
        </span>{" "}
        무신사 스탠다드{" "}
      </p>
    </div>
  );
}

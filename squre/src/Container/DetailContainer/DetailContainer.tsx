import React, { useReducer, useEffect } from "react";
import axios from "axios";
import ClothsDetail from "../../Component/ClothsDetail";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";
import {
  ClothsDataType_detail,
  DetailResponseType
} from "../../Types/ContainerTypes";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        cloths: null,
        detail: null,
        error: null
      };
    case "SUCCESS":
      return {
        loading: false,
        cloths: action.cloths,
        detail: action.detail,
        error: null
      };
    case "ERROR":
      return {
        loading: false,
        cloths: null,
        detail: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const DetailContainer = ({ id }) => {
  const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/?format=json";

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    cloths: null,
    detail: null,
    error: null
  });

  useEffect(() => {
    const fetchClothsDetail = async () => {
      try {
        dispatch({ type: "LOADING" });

        const response_cloth: ClothsDataType_detail = await axios.get(
          clothsAPI,
          { params: { id: id } }
        );

        const response_detail: DetailResponseType = await axios.get(
          `https://squaremall.pythonanywhere.com/cloth/detail/${id}`
        );

        dispatch({
          type: "SUCCESS",
          cloths: response_cloth.data.results,
          detail: response_detail.data
        });
      } catch (e) {
        dispatch({ type: "ERROR", error: e });
      }
    };
    fetchClothsDetail();
  }, [id]);

  console.log(state);

  const { loading, cloths, detail, error } = state;

  if (loading) return <Loading />;
  if (error) return <ClothsError text="Product Detail" />;
  if (!cloths) return null;

  return (
    <div>
      <ClothsDetail
        key={cloths[0].id}
        id={cloths[0].id}
        cloth_detail_musinsa={cloths[0].cloth_detail_musinsa}
        productNo={cloths[0].productNo}
        brand={cloths[0].brand}
        title={cloths[0].title}
        clothImgSuffix={cloths[0].clothImgSuffix}
        original_price={cloths[0].price.original_price}
        discounted_price={cloths[0].price.discounted_price}
        category={cloths[0].category}
        gender={detail.gender}
        season={detail.season}
        color={detail.color}
        manufactured={detail.manufactured}
        description={detail.description}
      />
    </div>
  );
};

export default DetailContainer;

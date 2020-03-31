import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClothsDetail from "../../Component/ClothsDetail";
import Loading from "../../Component/Loading";
import ClothsError from "../../Component/ClothsError";
import { RootState } from "../../store/modules";
import { getClothsDetailThunk } from "../../store/modules/detail/thunk";

const DetailContainer = ({ id }) => {
  const { cloths, detail, loading, error } = useSelector(
    (state: RootState) => state.detail.detail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothsDetailThunk(id));
  }, [dispatch, id]);

  if (loading) return <Loading />;
  if (error) return <ClothsError text="Product Detail" />;
  if (!cloths && !detail) return null;

  const { results: clothsInfo } = cloths.data;
  const { data: detailInfo } = detail;
  return (
    <div>
      <ClothsDetail
        key={clothsInfo[0].id}
        id={clothsInfo[0].id}
        cloth_detail_musinsa={clothsInfo[0].cloth_detail_musinsa}
        productNo={clothsInfo[0].productNo}
        brand={clothsInfo[0].brand}
        title={clothsInfo[0].title}
        clothImgSuffix={clothsInfo[0].clothImgSuffix}
        original_price={clothsInfo[0].price.original_price}
        discounted_price={clothsInfo[0].price.discounted_price}
        category={clothsInfo[0].category}
        gender={detailInfo.gender}
        season={detailInfo.season}
        color={detailInfo.color}
        manufactured={detailInfo.manufactured}
        description={detailInfo.description}
      />
    </div>
  );
};

export default DetailContainer;

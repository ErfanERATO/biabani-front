import React from "react";
import { useSingle } from "./Hooks";

const SingleProduct = () => {
  const { loading, single } = useSingle();

  if (loading) {
    return (
      <>
        <p>در حال دریافت اطلاعات</p>
      </>
    );
  }
  console.log(single.data, "fuck fuck")
  return (
    <div className="container">
      <img src={single.data?.photos?.url} alt={single.data.photos.alt} />
      <h1>{single.data?.title}</h1>
      <p>{single.data?.category?.title}</p>
      <p>{single.data?.l_desc}</p>
      <p>{single.data?.price}</p>
    </div>
  );
};

export default SingleProduct;

import React, { useState } from "react";
import "./style.scss";
import CustomCard from "../../Components/Card";
import { useProductList } from "./hooks/useProductList";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../Components/Input/index";
import { CiSearch } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import CustomBtn from "../../Components/Btn";

const ProductPage = () => {
  const navigate = useNavigate();
  const { loading, productsData } = useProductList();
  if (loading) {
    return (
      <>
        <p>در حال دریافت اطلاعات</p>
      </>
    );
  }
  return (
    <div className="card-wrapper container d-flex justify-content-center align-items-center">
      <div className="row page-title">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <h4>محصولات ما</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <form className="search-form">
          <div>
            <CustomInput
              icon={<CiSearch style={{ fontSize: "20px" }} />}
              props={{
                placeholder: "نام محصول را وارد نمایید",
              }}
            />
          </div>

          <div>
            <Form.Select id="store" style={{borderRadius:"12px"}}>
              <option disabled selected value>
                یک گزینه را انتخاب کنید
              </option>
              <option>دسته ۲</option>
              <option>دسته ۱</option>
            </Form.Select>
          </div>

            <CustomBtn
              type="button"
              text="تایید"
              className="confirm-btn"
            />
        </form>

        {productsData.data?.map((elements, key) => {
          return (
            <div
              className="col-12 col-sm-12 col-md-3"
              key={key}
              style={{ paddingTop: "30px" }}
            >
              <CustomCard
                image={
                  <img src={elements.photos?.url} alt={elements.photos?.alt} />
                }
                title={elements.title}
                category={elements.category?.title}
                text={elements.s_desc}
                price={elements.price}
                method={() => {
                  navigate(`/product/${elements.slug}`);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;

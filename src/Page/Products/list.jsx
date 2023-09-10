import React, { useEffect, useState } from "react";
import "./style.scss";
import CustomCard from "../../Components/Card";
import { useProductList, useSingleProduct } from "./hooks/useProductList";
import { useSearchParams } from "react-router-dom";
import CustomInput from "../../Components/Input/index";
import { CiSearch } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import CustomBtn from "../../Components/Btn";
import { useUrl } from "../../hooks/useUrl";
import Modal from "react-bootstrap/Modal";
import Paginate from "../../Components/Pagination";

const ProductPage = () => {
  // const navigate = useNavigate();
  const { loading, productsData } = useProductList();
  const { addToQuery } = useUrl();
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(null);
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

          <form className="search-form">
            <div>
              <CustomInput
                value={searchParams.get("search")}
                onChange={(e) => addToQuery("search", e.target.value)}
                icon={<CiSearch style={{ fontSize: "20px" }} />}
                placeholder="نام محصول را وارد نمایید"
              />
            </div>

            <div>
              <Form.Select
                value={searchParams.get("category")}
                id="store"
                style={{ borderRadius: "12px" }}
                onChange={(e) => addToQuery("category", e.target.value)}
              >
                <option disabled selected value>
                  یک گزینه را انتخاب کنید
                </option>
                <option value={2}>دسته ۲</option>
                <option value={1}>دسته ۱</option>
              </Form.Select>
            </div>

            <CustomBtn type="button" text="تایید" className="confirm-btn" />
          </form>
        </div>
      </div>

      <div className="row">
        {productsData.data?.map((elements, key) => {
          return (
            <div
              className="col-12 col-sm-12 col-md-3"
              key={key}
              style={{ paddingTop: "30px" }}
            >
              <CustomCard
                title={elements.title}
                category={elements.category?.title}
                text={elements.s_desc}
                price={elements.price}
                btn={() => (
                  <CustomBtn
                    onClick={() => setShowModal(elements)}
                    text={"مشاهده"}
                    className="btn-Card"
                  />
                  // <button onClick={() => setModalData(elements)}>مشاهده</button>
                )}
              />
            </div>
          );
        })}
        <div style={{paddingTop:"30px"}}>
          <Paginate
            active={productsData?.current_page}
            limit={productsData?.per_page || 5}
            total={productsData?.last_page}
          />
        </div>
      </div>

      <SingleModel data={showModal} onHide={() => setShowModal(null)} />
    </div>
  );
};

export default ProductPage;

export const SingleModel = ({ data = {}, onHide }) => {
  const { loading, productsData, getProduct } = useSingleProduct();
  useEffect(() => {
    if (data?.slug) getProduct(data?.slug);
  }, [data]);
  return (
    <div className="single-modal">
      <Modal show={data} fullscreen={"md-down"} onHide={onHide}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1>{productsData?.title}</h1>
          <h6>{productsData?.category?.title}</h6>
          <p className="desc">{productsData?.l_desc}</p>
          <p className="price">{productsData?.price} تومان</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

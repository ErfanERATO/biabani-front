import React from "react";
import "./style.scss";
import CustomCard from "../../Components/Card";
import Image from "../../Assets/Image/Music_Icon.jpg";

const ProductPage = () => {
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
        <div className="col-12 col-sm-12 col-md-3">
          <CustomCard
            image={<imag src={Image} />}
            title={"32532532"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium nesciunt ullam blanditiis commodi fuga placeat assumenda cum id impedit nemo natus dignissimos dolore fugit cumque nisi, perferendis officiis quam."
            }
          />
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <CustomCard
            image={<imag src={Image} />}
            title={"32532532"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium nesciunt ullam blanditiis commodi fuga placeat assumenda cum id impedit nemo natus dignissimos dolore fugit cumque nisi, perferendis officiis quam."
            }
          />
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <CustomCard
            image={<imag src={Image} />}
            title={"32532532"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium nesciunt ullam blanditiis commodi fuga placeat assumenda cum id impedit nemo natus dignissimos dolore fugit cumque nisi, perferendis officiis quam."
            }
          />
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <CustomCard
            image={<imag src={Image} />}
            title={"32532532"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium nesciunt ullam blanditiis commodi fuga placeat assumenda cum id impedit nemo natus dignissimos dolore fugit cumque nisi, perferendis officiis quam."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

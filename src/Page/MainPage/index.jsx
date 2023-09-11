import React from "react";
import "./style.scss";
import CustomInput from "../../Components/Input/index";
import { CiSearch } from "react-icons/ci";
import Slider from "../../Components/Swiper/index";

const MainPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <h4>جست و جوی محصولات</h4>
          </div>
        </div>
      </div>
      <div className="search-form container">
        <form className="user-inputs">
          <CustomInput
            icon={<CiSearch style={{ fontSize: "20px" }} />}
            placeholder="کد محصول را وارد نمایید"
          />

          <div className="d-flex align-items-center justify-content-center pt-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              tenetur perspiciatis consectetur dolorem ipsam odio voluptas
              cumque temporibus voluptatibus aspernatur non veniam illo,
              consequuntur rerum officiis id mollitia neque incidunt.
            </p>
          </div>

          <div className="home-slider-section d-flex align-items-center justify-content-center pt-3">
            <Slider
              props={{ autoplay: true }}
              data={[
                {
                  src: require("../../Assets/Image/Music_Icon.jpg"),
                },
                {
                  src: require("../../Assets/Image/Music_Icon.jpg"),
                },
                {
                  src: require("../../Assets/Image/Music_Icon.jpg"),
                },
                {
                  src: require("../../Assets/Image/Music_Icon.jpg"),
                },
                {
                  src: require("../../Assets/Image/Music_Icon.jpg"),
                },
                {
                  src: require("../../Assets/Image/Music_Icon.jpg"),
                },
              ]}
              renderItem={(item, key) => {
                return (
                  <div key={key} className="home-slider">
                    <img src={item.src} style={{}} />
                  </div>
                );
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainPage;

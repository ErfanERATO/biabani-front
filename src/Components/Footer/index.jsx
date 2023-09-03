import React from "react";
import "./style.scss";
import { MapContainer, Popup, TileLayer, useMap, Marker } from "react-leaflet";
import CustomBtn from "../Btn";
import { useNavigate } from "react-router-dom";

const CustomFooter = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer container">
        <div className="row justify-content-around">
          <div className="col-md-4">
            <div className="footer-links">
              <p className="fw-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                porro, velit sunt earum quisquam, possimus nam consequuntur odit
                maiores dignissimos error id sapiente non quis exercitationem
                animi sit natus reiciendis.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-links">
              <CustomBtn
                className="btn-footer"
                text="محصولات"
                onClick={() => {
                  navigate("/products");
                }}
              />

              <CustomBtn className="btn-footer" text="تماس با ما" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-links">
              <div className="map">
                <div className="location">
                  <MapContainer
                    center={[51.505, -0.09]}
                    zoom={13}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: "#1b1a17" }} />
        <div>
          <p className="text-center" style={{ color: "#1b1a17" }}>
            توسعه و پیاده سازی تخصصی در تیم طراحی و توسعه آکو | نسخه 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;

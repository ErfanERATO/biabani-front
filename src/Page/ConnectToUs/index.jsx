import React from "react";
import "./style.scss";
import { MapContainer, Popup, TileLayer, useMap, Marker } from "react-leaflet";

const ConnectToUs = () => {
  return (
    <div className="page-wrapper container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <h4>درباره‌ی ما</h4>
          </div>
        </div>
      </div>
      <div className="row location-text d-flex justify-content-between">
        <div className="col-md-6 text-side-map">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quidem incidunt ipsum dignissimos, quasi velit, nobis repellat quia
            sed tenetur quam corporis! Reiciendis incidunt rem, maiores a soluta
            laudantium excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati quidem incidunt ipsum dignissimos, quasi
            velit, nobis repellat quia sed tenetur quam corporis! Reiciendis
            incidunt rem, maiores a soluta laudantium excepturi. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Obcaecati quidem
            incidunt ipsum dignissimos, quasi velit, nobis repellat quia sed
            tenetur quam corporis! Reiciendis incidunt rem, maiores a soluta
            laudantium excepturi.
          </p>
        </div>

        <div
          className="col-md-6 vector-connect-us"
          style={{ backgroundColor: "red" }}
        >
          asdasd
        </div>
      </div>
    </div>
  );
};

export default ConnectToUs;

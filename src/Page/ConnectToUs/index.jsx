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
      <div className="location-text d-flex justify-content-between">
        <div className="text-side-map">
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

        <div className="map-connect-us">
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
  );
};

export default ConnectToUs;

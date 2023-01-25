import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../../images/icon-hospital.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import "./AdminBloodBankProfileComponent.css";
import style from "./../Map/Map.module.css";

let DefaultIconHospital = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const AdminBloodBankProfileComponent = (props) => {
  const [data, setData] = useState(props.data);
  const [position, setPosition] = useState([
    45.25490514025021, 19.827061869242982,
  ]);
  const [longitude, setLongitude] = useState([]);
  const [latitude, setLatitude] = useState([]);

  const handleAddress = (address) => {
    return (
      address.street +
      " " +
      address.number +
      ", " +
      address.city +
      " " +
      address.postalCode
    );
  };
  return (
    <div className="bank-container">
      <div className="bank-title">My BloodBank</div>
      <div className="bank-data">
        <div className="bank-data-left">
          <div className="bank-data-item">
            <label className="bank-data-label">Name:</label>
            <input
              className="bank-data-input"
              type="text"
              value={data.name}
              disabled
            />
          </div>
          <div className="bank-data-item">
            <label className="bank-data-label">Rating:</label>
            <input
              className="bank-data-input"
              value={data.rating + " / 10"}
              disabled
              type="text"
            />
          </div>
          <div className="bank-data-item">
            <label className="bank-data-label">Description:</label>
            <input
              className="bank-data-input"
              value={data.description}
              disabled
              type="text"
            />
          </div>
        </div>
        <div className="bank-data-right">
          <div className="map-container" id="map">
            <MapContainer
              className={style.leaf}
              center={position}
              zoom={18}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                icon={DefaultIconHospital}
                position={[45.25490514025021, 19.827061869242982]}
              >
                <Popup>{handleAddress(data.address)}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBloodBankProfileComponent;

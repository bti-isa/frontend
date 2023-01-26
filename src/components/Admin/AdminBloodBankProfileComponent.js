import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../../images/icon-hospital.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import classes from "./AdminBloodBankProfileComponent.module.css";
import style from "./../Map/Map.module.css";
import { async } from "q";
import BloodUnitTableComponent from "./BloodUnitTableComponent";
import { axiosInstance } from "config/https";
import { useNavigate } from "react-router";

let DefaultIconHospital = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const AdminBloodBankProfileComponent = (props) => {
  const [data, setData] = useState(props.data);
  const [position, setPosition] = useState([
    data.address.location.latitude,
    data.address.location.longitude,
  ]);
  const [bloodUnits, setBloodUnits] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`http://localhost:8080/api/BloodBank/get-blood-units/${data.id}`)
      .then((res) => {
        setIsLoaded(true);
        setBloodUnits(res.data);
      });
  }, []);

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

  const onBack = () => {
    navigate("/admin/calendar");
  };

  const onUpdate = () => {
    navigate(`/update-bloodbank/${data.id}`);
  };

  const onAppointments = () => {
    navigate(`/show-bloodbank/${data.id}`);
  };

  return (
    <div className={classes["profile-bank-container"]}>
      <div className={classes["bank-name"]}>{data.name}</div>
      <div className={classes["map-container"]} id="map">
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
          <Marker icon={DefaultIconHospital} position={position}>
            <Popup>{handleAddress(data.address)}</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className={classes["details-container"]}>
        <div className={classes["bank-description-container"]}>
          <div className={classes["details-label"]}>Description:</div>
          <div className={classes["bank-description"]}>{data.description}</div>
        </div>
        <div className={classes["bank-rating-container"]}>
          <div className={classes["bank-rating-container-inner"]}>
            <div className={classes["details-label"]}>Rating:</div>
            <div className={classes["bank-rating"]}>
              The blood bank currently has{" "}
              <span className="red">{data.rating}/10</span> rating.
            </div>
          </div>
        </div>
      </div>
      <div className={classes["tables-container"]}>
        <div className={classes["blood-units-container"]}>
          {isLoaded && <BloodUnitTableComponent data={bloodUnits} />}
        </div>
        <div className={classes["options-container"]}>
          <div className={classes["options-container-inner"]}>
            <div className={classes["options-button-container"]}>
              <button
                onClick={onAppointments}
                className={classes["options-button"]}
              >
                Available appointments
              </button>
            </div>
            <div className={classes["options-button-container"]}>
              <button onClick={onUpdate} className={classes["options-button"]}>
                Update
              </button>
            </div>
            <div className={classes["options-button-container"]}>
              <button onClick={onBack} className={classes["options-button"]}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBloodBankProfileComponent;

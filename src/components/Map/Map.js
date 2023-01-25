import style from "./Map.module.css";
import React, { useState } from "react";
import SockJsClient from "react-stomp";
import { axiosInstance } from "../../config/https";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconAmbulance from "../../images/icons8-ambulance-48.png";
import icon from "../../images/icon-hospital.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import { toast } from "react-toastify";

let DefaultIconHospital = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
let DefaultIconAmbulance = L.icon({
  iconUrl: iconAmbulance,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIconAmbulance;
const SOCKET_URL = "http://localhost:8080/socket";

const Map = () => {
  const [position, setPosition] = useState([45.244809, 19.831056]);
  const [longitude, setLongitude] = useState([]);
  const [latitude, setLatitude] = useState([]);

  const renderMarker = () => {
    return <Marker position={position}></Marker>;
  };

  let onConnected = () => {
    console.log("Connected!!");
  };
  let onMessageReceived = (msg) => {
    console.log(msg);
    let splitmsg = msg.split(",");
    console.log(splitmsg);
    setPosition([parseFloat(splitmsg[1]), parseFloat(splitmsg[0])]);
  };
  const start = () => {
    axiosInstance
      .post(`http://localhost:8080/map/start/`, {
        startLocation: [19.831056, 45.244809],
        endLocation: [longitude, latitude],
        frequency: 1,
      })
      .then(
        (res) => {
          toast("Delivery started.");
        },
        (err) => {
          toast("Service not work. Try again later");
        }
      );
  };
  return (
    <div className={style.card}>
      <div className={style.map} id="map">
        <MapContainer
          className={style.leaf}
          center={position}
          zoom={18}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
            url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png'"
          />
          <Marker
            icon={DefaultIconHospital}
            position={[45.244809, 19.831056]}
          ></Marker>
          {renderMarker()}
        </MapContainer>
      </div>
      <div>
        <SockJsClient
          url={SOCKET_URL}
          topics={["/socket-publisher"]}
          onConnect={onConnected}
          onDisconnect={console.log("Disconnected!")}
          onMessage={(msg) => onMessageReceived(msg)}
          debug={false}
        />
      </div>
      <div className={style.form}>
        <div className={style.formTitle}>Start delivery</div>
        <div className={style.fields}>
          <div className={style.field}>
            <input
              type="number"
              className={style.input}
              placeholder="Latitude"
              onChange={(e) => setLatitude(e.target.value)}
              step="0.000001"
            />
          </div>
          <div className={style.field}>
            <input
              type="number"
              className={style.input}
              placeholder="Longitude"
              onChange={(e) => setLongitude(e.target.value)}
              step="0.000001"
            />
          </div>
        </div>
        <div className={style.buttonWrap}>
          <button className={style.button} onClick={start}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;

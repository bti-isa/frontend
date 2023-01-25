import style from "./Map.module.css";
import React, { useState } from "react";
import SockJsClient from "react-stomp";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import iconAmbulance from "../../images/icons8-ambulance-48.png";
import icon from "../../images/icon-hospital.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

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
  const [position, setPosition] = useState([45.244744, 19.83119]);

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

  return (
    <div className={style.card}>
      <div className={style.map} id="map">
        <MapContainer
          className={style.leaf}
          center={position}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
            url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png'"
          />
          <Marker
            icon={DefaultIconHospital}
            position={[45.244744, 19.83119]}
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
    </div>
  );
};

export default Map;

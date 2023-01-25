import style from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [45.24033, 19.797357];
const renderMarker = () => {
  return <Marker position={[45.24033, 19.797354]}></Marker>;
};
const Map = () => {
  return (
    <div className={style.card}>
      <div className={style.map} id="map">
        <MapContainer
          className={style.leaf}
          center={[45.24476155830623, 19.83129558945558]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
            url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png'"
          />
          <Marker position={[45.24476155830623, 19.83129558945558]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

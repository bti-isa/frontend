import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { height } from "@mui/system";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export default function SearchBox(props) {
  const [isRender, setRender] = useState(false);
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <OutlinedInput
            style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
          <Button
            style={{ backgroundColor: "#b30c2e" }}
            variant="contained"
            color="primary"
            onClick={() => {
              // Search
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                  setRender(true);
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            <img
              src="https://assets.stickpng.com/images/59cfc4d2d3b1936210a5ddc7.png"
              alt="Loupe"
              style={{ width: 42, height: 42 }}
            />
          </Button>
        </div>
      </div>
      {isRender && (
        <div style={{ height: "30vh" }}>
          <List
            component="nav"
            aria-label="main mailbox folders"
            style={{ overflowY: "auto", height: "100%" }}
          >
            {listPlace.map((item) => {
              return (
                <div key={item?.place_id}>
                  <ListItem
                    button
                    onClick={() => {
                      setSelectPosition(item);
                      setRender(false);
                    }}
                  >
                    <ListItemIcon>
                      <img
                        src="https://www.worth.com/wp-content/uploads/2017/09/map-marker-icon.png"
                        alt="Marker"
                        style={{ width: 42, height: 42 }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item?.display_name} />
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
      )}
    </div>
  );
}

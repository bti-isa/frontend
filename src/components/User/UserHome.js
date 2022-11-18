import axios from "axios";
import { useState, useEffect } from "react";
import "./UserHome.css";
import CONSTANTS from "constants/constants";
import { Link } from "react-router-dom";

const UserHome = (props) => {
  const [data, setData] = useState(props.bloodBanks);
  const [order, setOrder] = useState("ASC");
  const [searchName, setSearchName] = useState("");
  const [searchStreet, setSearchStreet] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  const sortingSpecial = (col, col1) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col][col1].toLowerCase() > b[col][col1].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col][col1].toLowerCase() < b[col][col1].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  useEffect(() => {
    const SearchDTO = {
      name: searchName,
      city: searchCity,
      street: searchStreet,
      country: null,
      postalCode: null,
      number: null,
      rating: searchRating,
    }

    axios.post(`${CONSTANTS.API}BloodBank/search`, SearchDTO).then(
      (response) => {
        setData(response.data)
      },
      (error) => {
        alert(error);
      }
    )

  }, [searchName, searchCity, searchRating, searchStreet]);

  return (
    <div class="space">
      <h1 className="title">Blood banks</h1>
      <div class="search">
        <input class="input" type="text" name="searchName" value={searchName} placeholder="Enter institute name" onChange={(e) => {
          setSearchName(e.target.value);
        }}></input>
        <input class="input" type="text" name="searchCity" value={searchCity} placeholder="Enter city" onChange={(e) => {
          setSearchCity(e.target.value);
        }}></input>
        <input class="input" type="text" name="searchStreet" value={searchStreet} placeholder="Enter street" onChange={(e) => {
          setSearchStreet(e.target.value);
        }}></input>
        <input class="input" type="text" name="searchRating" value={searchRating} placeholder="Enter rating" onChange={(e) => {
          setSearchRating(e.target.value);
        }}></input>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th" onClick={() => sorting("name")}>
                Name
              </th>
              <th
                className="th"
                onClick={() => sortingSpecial("address", "country")}
              >
                Country
              </th>
              <th
                className="th"
                onClick={() => sortingSpecial("address", "city")}
              >
                City
              </th>
              <th
                className="th"
                onClick={() => sortingSpecial("address", "street")}
              >
                Street
              </th>
              <th className="th" onClick={() => sorting("rating")}>
                Rating
              </th>
              <th className="th" onClick={() => sorting("description")}>
                Description
              </th>
              <th className="th">
                Update
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((bloodBank) => (
              <tr className="tr" key={bloodBank.id}>
                <td className="td">{bloodBank.name}</td>
                <td className="td">{bloodBank.address.country}</td>
                <td className="td">{bloodBank.address.city}</td>
                <td className="td">
                  {bloodBank.address.street + " " + bloodBank.address.number}
                </td>
                <td className="td">{bloodBank.rating}</td>
                <td className="td">{bloodBank.description}</td>
                <td className="td"><Link to={`/update-bloodbank/${bloodBank.id}`}>Update</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHome;

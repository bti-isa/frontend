import axios from "axios";
import { axiosInstance } from "../../config/https";
import { useState, useEffect } from "react";
import "./UserHome.css";
import CONSTANTS from "constants/constants";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";

const UserHome = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("asc");
  const [searchName, setSearchName] = useState("");
  const [searchStreet, setSearchStreet] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const getData = () => {
    axiosInstance
      .get(
        `BloodBank?page=${page}&size=${rowsPerPage}`
      )
      .then((res) => setData(res.data));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getData();
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
    axiosInstance
      .get(
        `BloodBank?page=${page}&size=${event.target.value}`
      )
      .then((res) => setData(res.data));
  };

  const sorting = (col) => {
    if (order === "asc") {
      axiosInstance
        .get(
          `BloodBank?page=${page}&size=${rowsPerPage}&sort=${col},${order}`
        )
        .then((res) => setData(res.data));
      setOrder("desc");
    }
    if (order === "desc") {
      axiosInstance
        .get(
          `BloodBank?page=${page}&size=${rowsPerPage}&sort=${col},${order}`
        )
        .then((res) => setData(res.data));
      setOrder("asc");
    }
  };

  const sortingSpecial = (col, col1) => {
    if (order === "asc") {
      axiosInstance
        .get(
          `BloodBank?page=${page}&size=${rowsPerPage}&sort=${col}.${col1},${order}`
        )
        .then((res) => setData(res.data));
      setOrder("desc");
    }
    if (order === "desc") {
      axiosInstance
        .get(
          `BloodBank?page=${page}&size=${rowsPerPage}&sort=${col}.${col1},${order}`
        )
        .then((res) => setData(res.data));
      setOrder("asc");
    }
  };

  useEffect(() => {
    const SearchDTO = {
      pageSize: rowsPerPage,
      pageNumber: page,
      name: searchName,
      city: searchCity,
      street: searchStreet,
      country: null,
      postalCode: null,
      number: null,
      rating: searchRating,
    };

    axiosInstance.post(`BloodBank/search`, SearchDTO).then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        //alert(error);
      }
    );
  }, [searchName, searchCity, searchRating, searchStreet]);

  return (
    <div class="space">
      <h1 className="title">Blood banks</h1>
      <div class="search">
        <input
          class="input"
          type="text"
          name="searchName"
          value={searchName}
          placeholder="Enter institute name"
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        ></input>
        <input
          class="input"
          type="text"
          name="searchCity"
          value={searchCity}
          placeholder="Enter city"
          onChange={(e) => {
            setSearchCity(e.target.value);
          }}
        ></input>
        <input
          class="input"
          type="text"
          name="searchStreet"
          value={searchStreet}
          placeholder="Enter street"
          onChange={(e) => {
            setSearchStreet(e.target.value);
          }}
        ></input>
        <input
          class="input"
          type="text"
          name="searchRating"
          value={searchRating}
          placeholder="Enter rating"
          onChange={(e) => {
            setSearchRating(e.target.value);
          }}
        ></input>
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
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          component="div"
          count={10}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default UserHome;

import { useState, useEffect } from "react";
import "./UserHome.css";

const UserHome = (props) => {
  const [data, setData] = useState(props.bloodBanks);
  const [order, setOrder] = useState("ASC");

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
  return (
    <div>
      <h1 className="title">Blood banks</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th" onClick={() => sorting("name")}>
                Name
              </th>
              <th
                className="th"
                onClick={() => sortingSpecial("address", "street")}
              >
                Street
              </th>
              <th
                className="th"
                onClick={() => sortingSpecial("address", "city")}
              >
                City
              </th>
              <th
                className="th"
                onClick={() => sortingSpecial("address", "country")}
              >
                Country
              </th>
              <th className="th" onClick={() => sorting("description")}>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((bloodBank) => (
              <tr className="tr" key={bloodBank.id}>
                <td className="td">{bloodBank.name}</td>
                <td className="td">
                  {bloodBank.address.street + " " + bloodBank.address.number}
                </td>
                <td className="td">{bloodBank.address.city}</td>
                <td className="td">{bloodBank.address.country}</td>
                <td className="td">{bloodBank.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHome;

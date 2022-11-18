import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserHome.css";

const UserHome = (props) => {
  console.log(props.bloodBanks)
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
      <h1>Blood banks</h1>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th onClick={() => sorting("name")}>Name</th>
              <th onClick={() => sortingSpecial("address", "street")}>
                Street
              </th>
              <th onClick={() => sortingSpecial("address", "city")}>City</th>
              <th onClick={() => sortingSpecial("address", "country")}>
                Country
              </th>
              <th>Rating</th>
              <th onClick={() => sorting("description")}>Description</th>
              <th onClick={() => sorting("description")}>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((bloodBank) => (
              <tr key={bloodBank.id}>
                <td>{bloodBank.name}</td>
                <td>
                  {bloodBank.address.street + " " + bloodBank.address.number}
                </td>
                <td>{bloodBank.address.city}</td>
                <td>{bloodBank.address.country}</td>
                <td>{bloodBank.rating}</td>
                <td>{bloodBank.description}</td>
                <td><Link to={`/blood-bank-detail/${bloodBank.id}`}>Details</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHome;

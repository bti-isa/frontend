import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "config/https";
import jwt from "jwt-decode";
const ShowBBDetails = (props) => {
  const [data, setData] = useState(props.appointments);
  const [order, setOrder] = useState("ASC");

  const handleLinkClick = (id) => {
    axiosInstance
      .patch(`Appointment/schedule`, {
        username: jwt(JSON.stringify(localStorage.getItem("token"))).sub,
        appointmentId: id,
      })
      .then((res) => alert(res));
  };

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

  return (
    <div className="container">
      <h1>Available Appointment</h1>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Bloodbank Name</th>
            <th className="th" onClick={() => sorting("dateTime")}>
              Date
            </th>
            <th className="th" onClick={() => sorting("dateTime")}>
              Time
            </th>
            <th className="th">Status</th>
            <th className="th">Schedule</th>
          </tr>
        </thead>
        <tbody>
          {data.map((appointment) => (
            <tr className="tr" key={appointment.bloodBank.id}>
              <td className="td">{appointment.bloodBank.name}</td>
              <td className="td">
                {appointment.dateTime.toString().split(" ")[0]}
              </td>
              <td className="td">
                {appointment.dateTime.toString().split(" ")[1]}
              </td>
              <td className="td">AVAILABLE</td>
              <td className="td">
                <Link
                  onClick={() => handleLinkClick(appointment.id)}
                  to={`/user`}
                >
                  Schedule
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBBDetails;

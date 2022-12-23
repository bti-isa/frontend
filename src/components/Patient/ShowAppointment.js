import { axiosInstance } from "../../config/https";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import jwt from "jwt-decode";
const ShowAppointment = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(
        `Patient/username/${
          jwt(JSON.stringify(localStorage.getItem("token"))).sub
        }`
      )
      .then((res) => {
        axiosInstance
          .get(`Appointment/patient/${res.data}`)
          .then((response) => setData(response.data));
      });
  }, []);

  const handleLinkClick = (id) => {
    axiosInstance.get(`Appointment/cancel/${id}`).then(
      (res) => {
        navigate("/user");
        toast("Appointment is canceled.");
      },
      (error) => {
        toast(error.response.data);
        return;
      }
    );
  };

  return (
    <div className="container666">
      <h1>Admin Accounts</h1>
      {data && (
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">Bloodbank Name</th>
              <th className="th">Date</th>
              <th className="th">Time</th>
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
                <td className="td">{appointment.status}</td>
                <td className="td">
                  <Link
                    onClick={() => handleLinkClick(appointment.id)}
                    to={`/user`}
                  >
                    Cancel
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowAppointment;

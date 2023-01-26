import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AdminProfileComponent.css";

const AdminProfileComponent = (props) => {
  const [data, setData] = useState(props.data);
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update-admin/${data.id}`);
  };
  return (
    <div className="admin-container">
      <div className="admin-title">My Account</div>
      <div className="data">
        <div className="data-left">
          <div className="data-item">
            <label className="data-label">First Name:</label>
            <input
              className="data-input"
              disabled
              value={data.firstname}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Last Name:</label>
            <input
              className="data-input"
              disabled
              value={data.lastname}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Email:</label>
            <input
              className="data-input"
              disabled
              value={data.username}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Jmbg:</label>
            <input
              className="data-input"
              disabled
              value={data.jmbg}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Gender:</label>
            <input
              className="data-input"
              disabled
              value={data.gender}
              type="text"
            />
          </div>
        </div>
        <div className="data-right">
          <div className="data-item">
            <label className="data-label">Phone Number:</label>
            <input
              className="data-input"
              disabled
              value={data.phoneNumber}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">City:</label>
            <input
              className="data-input"
              disabled
              value={data.address.city}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Address:</label>
            <input
              className="data-input"
              disabled
              value={data.address.street}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Number:</label>
            <input
              className="data-input"
              disabled
              value={data.address.number}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Postal Code:</label>
            <input
              className="data-input"
              disabled
              value={data.address.postalCode}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="admin-update-container">
        <button onClick={handleUpdate} className="admin-update-button">
          Update
        </button>
      </div>
    </div>
  );
};

export default AdminProfileComponent;

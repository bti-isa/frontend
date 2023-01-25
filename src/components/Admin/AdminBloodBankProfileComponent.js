import { useState } from "react";
import "./AdminBloodBankProfileComponent.css";

const AdminBloodBankProfileComponent = (props) => {
  const [data, setData] = useState(props.data);

  const handleAddress = (address) => {
    return (
      address.street +
      " " +
      address.number +
      ", " +
      address.city +
      " " +
      address.postalCode
    );
  };
  return (
    <div className="bank-container">
      <div className="bank-title">My BloodBank</div>
      <div className="bank-data">
        <div className="bank-data-left">
          <div className="bank-data-item">
            <label className="bank-data-label">Name:</label>
            <input
              className="bank-data-input"
              type="text"
              value={data.name}
              disabled
            />
          </div>
          <div className="bank-data-item">
            <label className="bank-data-label">Rating:</label>
            <input
              className="bank-data-input"
              value={data.rating + " / 10"}
              disabled
              type="text"
            />
          </div>
          <div className="bank-data-item">
            <label className="bank-data-label">Description:</label>
            <input
              className="bank-data-input"
              value={data.description}
              disabled
              type="text"
            />
          </div>
        </div>
        <div className="bank-data-right">
          <div className="bank-data-item map">
            <label className="bank-data-label map">You can find us at</label>
            <input
              className="bank-data-input"
              value={handleAddress(data.address)}
              disabled
              type="text"
            />
          </div>
          <div className="map-container"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminBloodBankProfileComponent;

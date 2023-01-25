import { useState } from "react";
import "./BloodBankDonors.css";

const BloodBankDonors = (props) => {
  const [data, setData] = useState(props.donors);
  return (
    <div className="container">
      <div className="title">These are all Blood Bank Donors</div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">First Name</th>
              <th className="th">Last Name</th>
              <th className="th">Email</th>
              <th className="th">JMBG</th>
              <th className="th">Blood Type</th>
              <th className="th">Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr className="tr" key={data.id}>
                <td className="td">{data.firstname}</td>
                <td className="td">{data.lastname}</td>
                <td className="td">{data.username}</td>
                <td className="td">{data.jmbg}</td>
                <td className="td">{data.bloodType}</td>
                <td className="td">{data.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodBankDonors;

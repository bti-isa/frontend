import { useState } from "react";
import "./BloodBankDonors.css";

const BloodBankDonors = (props) => {
  const [data, setData] = useState(props.donors);
  const handleDate = (date) => {
    return new Date(date[2], date[1], date[0]);
  };

  return (
    <div className="container">
      <div className="title">These are all Blood Bank Donors</div>
      <div className="table-container">
        <table className="table table-sortable">
          <thead>
            <tr className="tr">
              <th className="th">First Name</th>
              <th className="th">Last Name</th>
              <th className="th">Email</th>
              <th className="th">JMBG</th>
              <th className="th">Blood Type</th>
              <th className="th">Gender</th>
              <th className="th">Donation Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr className="tr" key={data.jmbg}>
                <td className="td">{data.firstname}</td>
                <td className="td">{data.lastname}</td>
                <td className="td">{data.username}</td>
                <td className="td">{data.jmbg}</td>
                <td className="td">{data.bloodType}</td>
                <td className="td">{data.gender}</td>
                <td className="td">{data.donateDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodBankDonors;

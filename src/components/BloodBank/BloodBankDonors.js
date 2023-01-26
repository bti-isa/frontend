import { useState } from "react";
import "./BloodBankDonors.css";

const BloodBankDonors = (props) => {
  const [data, setData] = useState(props.donors);

  const handleDate = (date) => {
    const newDate = new Date(
      date[0],
      date[1] + 1,
      date[2],
      date[3],
      date[4],
      0,
      0
    );
    console.log(newDate);

    return newDate.toISOString().substring(0, 10);
  };

  function sortTable(n) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir === "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  return (
    <div className="container">
      <div className="title">These are all Blood Bank Donors</div>
      <div className="table-container">
        <table className="table table-sortable" id="myTable">
          <thead>
            <tr className="tr">
              <th
                className="th"
                onClick={() => {
                  sortTable(0);
                }}
              >
                First Name
              </th>
              <th
                className="th"
                onClick={() => {
                  sortTable(1);
                }}
              >
                Last Name
              </th>
              <th
                className="th"
                onClick={() => {
                  sortTable(2);
                }}
              >
                Email
              </th>
              <th
                className="th"
                onClick={() => {
                  sortTable(3);
                }}
              >
                JMBG
              </th>
              <th
                className="th"
                onClick={() => {
                  sortTable(4);
                }}
              >
                Blood Type
              </th>
              <th
                className="th"
                onClick={() => {
                  sortTable(5);
                }}
              >
                Gender
              </th>
              <th
                className="th"
                onClick={() => {
                  sortTable(6);
                }}
              >
                Donation Date
              </th>
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
                <td className="td">{handleDate(data.donateDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodBankDonors;

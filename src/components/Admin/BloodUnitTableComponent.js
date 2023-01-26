import { useState } from "react";
import classes from "./BloodUnitTableComponent.module.css";

const BloodUnitTableComponent = (props) => {
  const [data, setData] = useState(props.data);
  return (
    <div className={classes["table-container"]}>
      <table className={classes["table"]}>
        <thead className={classes["table-head"]}>
          <tr className={classes.tr}>
            <th className={classes.th}>Blood Type</th>
            <th className={classes.th}>Current Quantity</th>
          </tr>
        </thead>
        <tbody className={classes["table-body"]}>
          {data.map((data) => (
            <tr className={classes.tr} key={data.id}>
              <td className={classes.tr}>{data.bloodType}</td>
              <td className={classes.tr}>{data.quantity + "ℓ"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodUnitTableComponent;

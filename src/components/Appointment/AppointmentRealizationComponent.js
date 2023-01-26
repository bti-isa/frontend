import { useRef, useState } from "react";
import classes from "./AppointmentRealizationComponent.module.css";
import { axiosInstance } from "../../config/https";
import CONSTANTS from "constants/constants";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AppointmentRealizationComponent = (props) => {
  const [data, setData] = useState(props.appointment);
  const inputDesc = useRef();
  const inputEquipment = useRef();
  const inputBlood = useRef();
  const navigate = useNavigate();

  const handleFinish = () => {
    const dto = {
      id: data.id,
      reportDescription: inputDesc.current.value,
      equipment: inputEquipment.current.value,
      bloodQuantity: inputBlood.current.value,
    };

    axiosInstance
      .patch(`${CONSTANTS.API}Appointment/finish`, dto)
      .then((res) => {
        toast("Appointment has been finished!");
        navigate("/user");
      })
      .catch((error) => {
        toast(error.response.data);
        // console.log(error);
      });
  };

  return (
    <div className={classes["deail-container-re"]}>
      <div className={classes.titlere}>APPOINTMENT REALIZATION</div>
      <div className={classes.infore}>
        <div className={classes["info-item-re"]}>
          <label>Used Equipment:</label>
          <input type="number" min="0" ref={inputEquipment} />
        </div>
        <div className={classes["info-item-re"]}>
          <label>Blood Quantity:</label>
          <input type="number" min="0" ref={inputBlood} />
        </div>
        <div className={classes["info-item-re"]}>
          <label>Report:</label>
        </div>
        <textarea ref={inputDesc} name="Text1" cols="60" rows="5"></textarea>
      </div>
      <div className={classes["finish-container"]}>
        <button className={classes["finish-button"]} onClick={handleFinish}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default AppointmentRealizationComponent;

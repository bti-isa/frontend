import { useEffect, useState } from "react";
import classes from "./AppointmentOptions.module.css";
import CONSTANTS from "constants/constants";
import { axiosInstance } from "../../config/https";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AppointmetOptions = (props) => {
  const [data, setData] = useState(props.appointment);
  const [canStrart, setCanStart] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const handlePunish = () => {
    const patientId = data.patient.id;
    axiosInstance
      .put(`${CONSTANTS.API}Patient/punish/${patientId}`)
      .then((res) => {
        toast("User has been punished!");
        navigate("/admin/calendar");
      });
  };

  const handleCheck = () => {
    axiosInstance
      .get(`${CONSTANTS.API}polls/get/${data.patient.id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("You can start appointment");
          setShowButton(true);
          setCanStart(true);
          return;
        }
        toast.error("Patient didn't check all criteria");
        setCanStart(false);
        setShowButton(true);
      });
  };

  const handleStart = () => {
    if (canStrart === true) {
      navigate(`/appointment-realization/${data.id}`);
      return;
    } else {
      axiosInstance
        .patch(`${CONSTANTS.API}Appointment/reject/${data.id}`)
        .then((res) => {
          alert("Appointment has been rejected");
          navigate("/user");
        });
    }
  };

  return (
    <div className={classes["option-container"]}>
      <button onClick={handlePunish}>Punish</button>
      {!showButton && <button onClick={handleCheck}>Check</button>}
      {showButton && (
        <button onClick={handleStart}>{canStrart ? "Start" : "Reject"}</button>
      )}
    </div>
  );
};

export default AppointmetOptions;

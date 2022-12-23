import { useRef, useState } from "react";
import classes from './AppointmentRealizationComponent.module.css'
import { axiosInstance } from '../../config/https'
import CONSTANTS from "constants/constants";
import { useNavigate } from "react-router";

const AppointmentRealizationComponent = (props) =>{
    const [data, setData] = useState(props.appointment);
    const inputDesc = useRef();
    const inputEquipment = useRef();
    const navigate = useNavigate();

    const handleFinish = () =>{
        const dto = {
            id: data.id,
            patientId: data.patient.id,
            bloodBankId: data.bloodBank.id,
            reportDescription: inputDesc.current.value
        }

        axiosInstance
        .patch(`${CONSTANTS.API}Appointment/finish`, dto).then((res) => {
            alert("Appointment has been finished!")
            navigate('/user')
        });
    }

     return(
        <div className={classes["deail-container-re"]}>
            <div className={classes.titlere}>APPOINTMENT - {data.id}</div>
            <div className={classes.infore}>
                <div className={classes["info-item-re"]}>
                    <label>Equipment:</label>
                </div>
                    <textarea ref={inputDesc} name="Text1" cols="60" rows="5"></textarea>
                <div className={classes["info-item-re"]}>
                    <label>Report:</label>
                </div>
                    <textarea ref={inputEquipment} name="Text1" cols="60" rows="5"></textarea>
                <button className={classes['finish-button']} onClick={handleFinish}>Finish</button>
            </div>
        </div>
    );
}

export default AppointmentRealizationComponent;
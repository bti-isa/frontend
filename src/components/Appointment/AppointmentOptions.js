import { useState } from 'react';
import classes from './AppointmentOptions.module.css';
import CONSTANTS from 'constants/constants';
import {axiosInstance} from '../../config/https'
import { useNavigate } from 'react-router';

const AppointmetOptions = (props) =>{
    const [data, setData] = useState(props.appointment)
    const navigate = useNavigate();

    const handlePunish = () =>{
        const patientId = data.patient.id;
        axiosInstance
            .put(`${CONSTANTS.API}Patient/punish/${patientId}`).then((res) => {
                navigate('/user')
            });
    }

    const handleCancel = () =>{
    }

    const handleStart = () =>{
    }

    return(
        <div className={classes["option-container"]}>
            <button onClick={handlePunish}>Punish</button>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleStart}>Start</button>
        </div>
    );
}

export default AppointmetOptions;
import { useEffect, useState } from 'react';
import classes from './AppointmentOptions.module.css';
import CONSTANTS from 'constants/constants';
import {axiosInstance} from '../../config/https'
import { useNavigate } from 'react-router';
import axios from 'axios';

const AppointmetOptions = (props) =>{
    const [data, setData] = useState(props.appointment)
    const [canStrart, setCanStart] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const navigate = useNavigate();
    console.log(data)

    const handlePunish = () =>{
        const patientId = data.patient.id;
        axiosInstance
            .put(`${CONSTANTS.API}Patient/punish/${patientId}`).then((res) => {
                alert("User has been punished!")
                navigate('/user')
            });
    }

    const handleCheck = () =>{
         axiosInstance
            .get(`${CONSTANTS.API}polls/get/${data.patient.id}`).then((res) => {
                if(res.data){
                    alert("You can start appointment")
                    setShowButton(true)
                    setCanStart(true)
                }
                alert("Patient didn't check all criteria")
                setCanStart(false)
                setShowButton(true)
            });
    }

    const handleStart = () =>{
        navigate(`/appointment-realization/${data.id}`)
        // if(!canStrart){
        // }
        //navigate('/poll')
    }

    return(
        <div className={classes["option-container"]}>
            <button onClick={handlePunish}>Punish</button>
            {!showButton && <button onClick={handleCheck}>Check</button>}
            {showButton && <button onClick={handleStart}>{canStrart ? "Start" : "Poll"}</button>}
        </div>
    );
}

export default AppointmetOptions;
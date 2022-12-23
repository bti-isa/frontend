import { useState } from 'react';
import classes from './AppointmentDetailComponent.module.css'

const AppointmentDetailComponent = (props) =>{
    const [data, setData] = useState(props.appointment)
    return(
        <div className={classes["deail-container"]}>
            <div className={classes.title}>APPOINTMENT</div>
            <div className={classes.info}>
                <div className={classes["info-item"]}>
                    <label>Blood Bank:</label>
                    <input type="text" disabled value={data.bloodBank.name}/>
                </div>
                 <div className={classes["info-item"]}>
                    <label>Patient:</label>
                    <input type="text" disabled value={data.patient.firstname + " " + data.patient.lastname}/>
                </div>
                <div className={classes["info-item"]}>
                    <label>Date:</label>
                    <input type="text" disabled value={data.dateTime}/>
                </div>
                <div className={classes["info-item"]}>
                    <label>Duration:</label>
                    <input type="text" disabled value={data.duration + "min"}/>
                </div>
            </div>
        </div>
    );
}

export default AppointmentDetailComponent;
import { useState } from "react";
import classes from './AppointmentRealizationComponent.module.css'

const AppointmentRealizationComponent = (props) =>{
    const [data, setData] = useState(props.appointment)

     return(
        <div className={classes["deail-container-re"]}>
            <div className={classes.titlere}>APPOINTMENT - {data.id}</div>
            <div className={classes.infore}>
                <div className={classes["info-item-re"]}>
                    <label>Equipment:</label>
                </div>
                    <textarea name="Text1" cols="60" rows="5"></textarea>
                <div className={classes["info-item-re"]}>
                    <label>Report:</label>
                </div>
                    <textarea name="Text1" cols="60" rows="5"></textarea>
                <button className={classes['finish-button']}>Finish</button>
            </div>
        </div>
    );
}

export default AppointmentRealizationComponent;
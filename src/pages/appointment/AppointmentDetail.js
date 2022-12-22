import AppointmentDetailComponent from 'components/Appointment/AppointmentDetailComponent';
import AppointmetOptions from 'components/Appointment/AppointmentOptions';
import classes from './AppointmentDetail.module.css'

const AppointmentDetail = () =>{
    return(
        <div className={classes["main-container"]}>
            <div className={classes["left"]}><AppointmentDetailComponent /></div>
            <div className={classes["right"]}><AppointmetOptions /></div>
        </div>
    );
}

export default AppointmentDetail
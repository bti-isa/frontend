import classes from './AppointmentDetailComponent.module.css'

const AppointmentDetailComponent = () =>{
    return(
        <div className={classes["deail-container"]}>
            <div className={classes.title}>APPOINTMENT</div>
            <div className={classes.info}></div>
        </div>
    );
}

export default AppointmentDetailComponent;
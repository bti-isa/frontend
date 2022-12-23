import classes from './AppointmentOptions.module.css'

const AppointmentRealizationOptions = () =>{
    
    const handleCancel = () => {}
    const handleFinish = () =>{}


    return(
        <div className={classes["option-container"]}>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleFinish}>Finish</button>
        </div>
    );
}

export default AppointmentRealizationOptions;
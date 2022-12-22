import { Link } from 'react-router-dom';
import classes from './AppointmentOptions.module.css';

const AppointmetOptions = () =>{
    return(
        <div className={classes["option-container"]}>
            <button>Punish</button>
            <button>Cancel</button>
            <button>Start</button>
        </div>
    );
}

export default AppointmetOptions;
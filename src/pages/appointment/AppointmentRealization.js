import AppointmentRealizationComponent from 'components/Appointment/AppointmentRealizationComponent';
import AppointmentRealizationOptions from 'components/Appointment/AppointmentRealizationOptions';
import Loading from 'components/Loading';
import useFetchData from 'customHooks/fetchData';
import { useParams } from 'react-router';
import classes from './AppointmentRealization.module.css'

const AppointmentRealization = () =>{
    const params = useParams();
    const {data,loading} = useFetchData(`Appointment/${params.Id}`)
    return(
        <>
            {loading  ? <Loading /> :  <div className={classes["main-container-re"]}>
                <div className={classes["left-re"]}><AppointmentRealizationComponent appointment={data} /></div>
                {/* <div className={classes["right-re"]}><AppointmentRealizationOptions /></div> */}
                </div>
            }
        </>
    );
}

export default AppointmentRealization;
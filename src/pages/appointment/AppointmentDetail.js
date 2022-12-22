import AppointmentDetailComponent from 'components/Appointment/AppointmentDetailComponent';
import AppointmetOptions from 'components/Appointment/AppointmentOptions';
import { axiosInstance } from 'config/https';
import CONSTANTS from 'constants/constants';
import useFetchData from 'customHooks/fetchData';
import { useEffect, useState } from 'react';
import classes from './AppointmentDetail.module.css'
import Loading from "components/Loading";
import { useParams } from 'react-router';

const AppointmentDetail = () =>{
    const params = useParams();
    //${params.id}
    const {data,loading} = useFetchData(`Appointment/1`)
    return(
        <>
            {loading  ? <Loading /> :  <div className={classes["main-container"]}>
                <div className={classes["left"]}><AppointmentDetailComponent appointment={data} /></div>
                <div className={classes["right"]}><AppointmetOptions appointment={data} /></div>
                </div>
            }
        </>
    );
}

export default AppointmentDetail;
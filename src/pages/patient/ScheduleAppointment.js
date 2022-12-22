import { Container } from "@mui/system";
import AppointmentSelector from "components/Patient/AppointmentSelector";
import PollForm from "components/Patient/PollForm";
import "./ScheduleAppointment.css";
import { useState, useEffect } from "react";

const ScheduleAppointment = () => {
    const [appointmentId, setAppointmentId] = useState(-1);

    return (
        <Container sx={{ display: "flex", maxWidth: "100%", marginLeft: "100px", padding: "0" }}>
            <div className="parent">
                <div>
                    <AppointmentSelector appointmentId={appointmentId} setAppointmentId={setAppointmentId} />
                </div>
                <div>
                    <PollForm appointmentId={appointmentId} setAppointmentId={setAppointmentId} />
                </div>
            </div>
        </Container>
    );
}

export default ScheduleAppointment;
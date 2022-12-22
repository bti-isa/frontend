import { Container } from "@mui/system";
import AppointmentSelector from "components/Patient/AppointmentSelector";
import PollForm from "components/Patient/PollForm";
import "./ScheduleAppointment.css";

const ScheduleAppointment = () => {



    return (
        <Container sx={{ display: "flex", maxWidth: "100%", marginLeft: "100px", padding: "0" }}>
            <div className="parent">
                <div>
                    <AppointmentSelector />
                </div>
                <div>
                    <PollForm />
                </div>
            </div>
        </Container>
    );
}

export default ScheduleAppointment;
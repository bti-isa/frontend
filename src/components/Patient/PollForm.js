import { Radio } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/https"
import jwt from "jwt-decode";
import { toast } from "react-toastify";
import "./PollForm.css";
import ROUTES from "config/routes";

const PollForm = ({ appointmentId, setAppointmentId }) => {
    const Questions = [
        { id: 0, text: "Da li imate manje od 50kg?", answer: "" },
        { id: 1, text: "Da li imate simptome prehlade?", answer: "" },
        { id: 2, text: "Da li imate promene na kozi?", answer: "" },
        {
            id: 3,
            text: "Da li imate problem sa visokim ili niskim pritiskom?",
            answer: "",
        },
        { id: 4, text: "Da li ste pod terapijom antibioticima?", answer: "" },
        {
            id: 5,
            text: "Da li se nalazite u fazi redovnog mesecnog ciklusa?",
            answer: "",
        },
        {
            id: 6,
            text: "Da li ste u posledniih 7 dana imala stomatoloskih intervencija?",
            answer: "",
        },
        {
            id: 7,
            text: "Da li ste u poslenjih 6 meseci imali neku tranfuziju krvi?",
            answer: "",
        },
    ];
    const navigate = useNavigate();
    const [weightOver50kg, setWeightOver50kg] = useState("");
    const [commonCold, setCommonCold] = useState("");
    const [skinDiseases, setSkinDiseases] = useState("");
    const [problemWithPressure, setProblemWithPressure] = useState("");
    const [antibiotics, setAntibiotics] = useState("");
    const [menstruation, setMenstruation] = useState("");
    const [dentalIntervention, setDentalIntervention] = useState("");
    const [other, setOther] = useState("");
    const [err, setErr] = useState(false);

    const handleChange = (event, id) => {
        if (id === 0) setWeightOver50kg(event.target.value);
        else if (id === 1) setCommonCold(event.target.value);
        else if (id === 2) setSkinDiseases(event.target.value);
        else if (id === 3) setProblemWithPressure(event.target.value);
        else if (id === 4) setAntibiotics(event.target.value);
        else if (id === 5) setMenstruation(event.target.value);
        else if (id === 6) setDentalIntervention(event.target.value);
        else if (id === 7) setOther(event.target.value);
    };

    const save = (e) => {
        e.preventDefault();
        if (
            weightOver50kg === "" ||
            commonCold === "" ||
            skinDiseases === "" ||
            problemWithPressure === "" ||
            antibiotics === "" ||
            menstruation === "" ||
            dentalIntervention === "" ||
            other === "" ||
            appointmentId === -1
        )
            setErr(true);
        else {
            setErr(false);
            if (
                weightOver50kg === "true" ||
                commonCold === "true" ||
                skinDiseases === "true" ||
                problemWithPressure === "true" ||
                antibiotics === "true" ||
                menstruation === "true" ||
                dentalIntervention === "true" ||
                other === "true"
            ) {
                toast("Your poll info does not let you to donate blood. Thank you.");
                return;
            }
            let dto = {
                appointmentId: appointmentId,
                username: jwt(JSON.stringify(localStorage.getItem("token"))).sub,
                poll: {
                    weightOver50kg: weightOver50kg,
                    commonCold: commonCold,
                    skinDiseases: skinDiseases,
                    problemWithPressure: problemWithPressure,
                    antibiotics: antibiotics,
                    menstruation: menstruation,
                    dentalIntervention: dentalIntervention,
                    other: other
                }
            }
            axiosInstance
                .patch(
                    `http://localhost:8080/api/Appointment/pre-schedule`, dto
                )
                .then(
                    (res) => {
                        navigate(ROUTES.USER_PAGE);
                    },
                    (error) => {
                        toast(error.response.data);
                        return;
                    }
                );
        }
    };

    return (
        <div>
            <h1 className="title">Poll</h1>
            <form className="form">
                <div className="container">
                    <div className="elem">
                        <h3 className="h3">{Questions.at(0).text}</h3>
                        <div className="radio">
                            <Radio
                                checked={weightOver50kg === "true"}
                                onChange={(event) => handleChange(event, 0)}
                                value="true"
                                name="weightOver50kg"
                                inputProps={{ "aria-label": "true" }}
                            />
                            <label>Yes</label>
                            <Radio
                                checked={weightOver50kg === "false"}
                                onChange={(event) => handleChange(event, 0)}
                                value="false"
                                name="weightOver50kg"
                                inputProps={{ "aria-label": "false" }}
                            />
                            <label>No</label>
                        </div>
                    </div>

                    <div className="elem">
                        <h3 className="h3">{Questions.at(1).text}</h3>
                        <div className="radio">
                            <Radio
                                checked={commonCold === "true"}
                                onChange={(event) => handleChange(event, 1)}
                                value="true"
                                name="commonCold"
                                inputProps={{ "aria-label": "true" }}
                            />
                            <label>Yes</label>
                            <Radio
                                checked={commonCold === "false"}
                                onChange={(event) => handleChange(event, 1)}
                                value="false"
                                name="commonCold"
                                inputProps={{ "aria-label": "false" }}
                            />
                            <label>No</label>
                        </div>
                    </div>

                    <div className="elem">
                        <h3 className="h3">{Questions.at(2).text}</h3>
                        <div className="radio">
                            <Radio
                                checked={skinDiseases === "true"}
                                onChange={(event) => handleChange(event, 2)}
                                value="true"
                                name="skinDiseases"
                                inputProps={{ "aria-label": "true" }}
                            />
                            <label>Yes</label>
                            <Radio
                                checked={skinDiseases === "false"}
                                onChange={(event) => handleChange(event, 2)}
                                value="false"
                                name="skinDiseases"
                                inputProps={{ "aria-label": "false" }}
                            />
                            <label>No</label>
                        </div>
                    </div>

                    <div className="elem">
                        <h3 className="h3">{Questions.at(3).text}</h3>
                        <div className="radio">
                            <Radio
                                checked={problemWithPressure === "true"}
                                onChange={(event) => handleChange(event, 3)}
                                value="true"
                                name="problemWithPressure"
                                inputProps={{ "aria-label": "true" }}
                            />
                            <label>Yes</label>
                            <Radio
                                checked={problemWithPressure === "false"}
                                onChange={(event) => handleChange(event, 3)}
                                value="false"
                                name="problemWithPressure"
                                inputProps={{ "aria-label": "false" }}
                            />
                            <label>No</label>
                        </div>
                    </div>

                    <div className="elem">
                        <h3 className="h3">{Questions.at(4).text}</h3>
                        <div className="radio">
                            <Radio
                                checked={antibiotics === "true"}
                                onChange={(event) => handleChange(event, 4)}
                                value="true"
                                name="antibiotics"
                                inputProps={{ "aria-label": "true" }}
                            />
                            <label>Yes</label>
                            <Radio
                                checked={antibiotics === "false"}
                                onChange={(event) => handleChange(event, 4)}
                                value="false"
                                name="antibiotics"
                                inputProps={{ "aria-label": "false" }}
                            />
                            <label>No</label>
                        </div>
                    </div>

                    <div className="elem">
                        <h3 className="h3"> {Questions.at(5).text}</h3>
                        <div className="radio">
                            <Radio
                                checked={menstruation === "true"}
                                onChange={(event) => handleChange(event, 5)}
                                value="true"
                                name="menstruation"
                                inputProps={{ "aria-label": "true" }}
                            />
                            <label>Yes</label>
                            <Radio
                                checked={menstruation === "false"}
                                onChange={(event) => handleChange(event, 5)}
                                value="false"
                                name="menstruation"
                                inputProps={{ "aria-label": "false" }}
                            />
                            <label>No</label>
                        </div>
                    </div>

                    <div className="elem">
                        <h3 className="h3">{Questions.at(6).text}</h3>
                        <div className="radio">
                            <Radio
                                checked={dentalIntervention === "true"}
                                onChange={(event) => handleChange(event, 6)}
                                value="true"
                                name="dentalIntervention"
                                inputProps={{ "aria-label": "true" }}
                            />
                            <label>Yes</label>
                            <Radio
                                checked={dentalIntervention === "false"}
                                onChange={(event) => handleChange(event, 6)}
                                value="false"
                                name="dentalIntervention"
                                inputProps={{ "aria-label": "false" }}
                            />
                            <label>No</label>
                        </div>
                    </div>

                    <div className="elem">
                        <h3 className="h3">{Questions.at(7).text}</h3>
                        <div className="radio">
                            <Radio
                                checked={other === "true"}
                                onChange={(event) => handleChange(event, 7)}
                                value="true"
                                name="other"
                                inputProps={{ "aria-label": "true" }}
                            />
                            <label>Yes</label>
                            <Radio
                                checked={other === "false"}
                                onChange={(event) => handleChange(event, 7)}
                                value="false"
                                name="other"
                                inputProps={{ "aria-label": "false" }}
                            />
                            <label>No</label>
                        </div>
                    </div>
                </div>
                <div className="err--wrap">
                    {err && <p className="red">Please fill all required fields.</p>}
                </div>
            </form>
            <div className="button--wrap">
                <button className="button" onClick={save}>
                    Schedule
                </button>
            </div>
        </div>
    );
}

export default PollForm
    ;
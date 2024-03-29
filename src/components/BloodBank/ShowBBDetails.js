import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Poll from "components/Poll/Poll";
import { axiosInstance } from "config/https";
import { useNavigate } from "react-router-dom";
import { Radio } from "@mui/material";
import { toast } from "react-toastify";
import jwt from "jwt-decode";
import { useParams } from "react-router-dom";
import "./ShowBBDetails.css";

const ShowBBDetails = (props) => {
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
  const params = useParams();
  useEffect(() => {
    axiosInstance
      .get(
        `http://localhost:8080/api/Appointment/finished-appointment/${params.id}`
      )
      .then((res) => {
        setIsLoading(false);
        setFinished(res.data);
        console.log(res.data);
      });
  }, []);

  const [weightOver50kg, setWeightOver50kg] = useState("");
  const [commonCold, setCommonCold] = useState("");
  const [skinDiseases, setSkinDiseases] = useState("");
  const [problemWithPressure, setProblemWithPressure] = useState("");
  const [antibiotics, setAntibiotics] = useState("");
  const [menstruation, setMenstruation] = useState("");
  const [dentalIntervention, setDentalIntervention] = useState("");
  const [other, setOther] = useState("");
  const [err, setErr] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");
  const [data, setData] = useState(props.appointments);
  const [finished, setFinished] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState("ASC");
  const [showPoll, setPoll] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (id) => {
    setPoll(true);
    setAppointmentId(id);
    // axiosInstance
    //   .patch(`Appointment/schedule`, {
    //     username: jwt(JSON.stringify(localStorage.getItem("token"))).sub,
    //     appointmentId: id,
    //   })
    //   .then((res) => alert(res));
  };

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
      other === ""
    )
      setErr(true);
    else {
      setErr(false);
      axiosInstance
        .patch(`Appointment/pre-schedule`, {
          username: jwt(JSON.stringify(localStorage.getItem("token"))).sub,
          appointmentId: appointmentId,
          poll: {
            weightOver50kg,
            commonCold,
            skinDiseases,
            problemWithPressure,
            antibiotics,
            menstruation,
            dentalIntervention,
            other,
          },
        })
        .then(
          (res) => {
            navigate("/user");
          },
          (error) => {
            toast(error.response.data);
            return;
          }
        );
    }
  };

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="container666">
      <h1>Available Appointment</h1>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Bloodbank Name</th>
            <th className="th" onClick={() => sorting("dateTime")}>
              Date
            </th>
            <th className="th" onClick={() => sorting("dateTime")}>
              Time
            </th>
            <th className="th">Status</th>
            <th className="th">Schedule</th>
          </tr>
        </thead>
        <tbody>
          {data.map((appointment) => (
            <tr className="tr" key={appointment.bloodBank.id}>
              <td className="td">{appointment.bloodBank.name}</td>
              <td className="td">
                {appointment.dateTime.toString().split(" ")[0]}
              </td>
              <td className="td">
                {appointment.dateTime.toString().split(" ")[1]}
              </td>
              <td className="td">AVAILABLE</td>
              <td className="td">
                <Link onClick={() => handleLinkClick(appointment.id)}>
                  Schedule
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <>
        {showPoll && (
          <div>
            <h2 className="title">Please fill poll to continue.</h2>
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
                {err && <p className="red">Please fill all question.</p>}
              </div>
              <div className="btn--wrap">
                <button className="btn" onClick={save}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </>
      <div>
        <h1>History</h1>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">Patient</th>
              <th className="th" onClick={() => sorting("dateTime")}>
                Date
              </th>
              <th className="th" onClick={() => sorting("dateTime")}>
                Time
              </th>
              <th className="th">Status</th>
              <th className="th">Duration</th>
              <th className="th">BloodBank</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && (
              <>
                {finished.map((appointment) => (
                  <tr className="tr" key={appointment.bloodBank.id}>
                    <td className="td">
                      {appointment.patient.firstname}{" "}
                      {appointment.patient.lastname}
                    </td>
                    <td className="td">
                      {appointment.dateTime.toString().split(" ")[0]}
                    </td>
                    <td className="td">
                      {appointment.dateTime.toString().split(" ")[1]}
                    </td>
                    <td className="td">COMPLITED</td>
                    <td className="td">{appointment.duration}min</td>
                    <td className="td">{appointment.bloodBank.name}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBBDetails;

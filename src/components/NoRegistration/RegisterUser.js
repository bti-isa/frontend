import "./RegisterUser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterUser = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [jmbg, setJmbg] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostal] = useState();
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errJmbg, setErrJmbg] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);

  const navigate = useNavigate();

  const check = () => {
    const checkUniqueDto = {
      username,
      phoneNumber,
      jmbg,
    };
    axios
      .post("http://localhost:8080/api/Patient/checkUnique", checkUniqueDto)
      .then((res) => {
        setErrEmail(res.data[0]);
        setErrJmbg(res.data[1]);
        setErrPhone(res.data[2]);
      });
  };

  const registerNewUser = (e) => {
    e.preventDefault();

    const newUserDto = {
      firstname,
      lastname,
      username,
      password,
      phoneNumber,
      occupation,
      education,
      jmbg,
      gender,
      role: "PATIENT",
      address: {
        city,
        street,
        country,
        number,
        postalCode,
        longitude: 0,
        latitude: 0,
      },
    };

    if (passwordMatch && !errEmail && !errJmbg && !errPhone) {
      fetch("http://localhost:8080/api/Patient/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserDto),
      }).then(() => {
        navigate("/");
      });
    }
  };

  const checkPasswordMatch = (e) => {
    setRepeatPassword(e.target.value);
    if (password !== e.target.value) setPasswordMatch(false);
    else setPasswordMatch(true);
  };

  return (
  <div className="main-container">
    <div className="card">
      <h1 className="title">Registration Form</h1>
      <form>
        <div className="row">
          <div className="row-elem">
            <div>
              <label className="label">First Name:</label>
              <input
                type="text"
                required
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label className="label">Last Name:</label>
              <input
                type="text"
                required
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-elem">
            <div>
              <label className="label">Username:</label>
              <input
                type="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={check}
              />
              {errEmail && <p className="red">Email already exists.</p>}
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label className="label">
                Phone number:<span className="span">(least 9 characters)</span>
              </label>
              <input
                type="text"
                required
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={check}
              />
              {errPhone && <p className="red">Phone number already exists.</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-elem">
            <div>
              <label className="label">
                Password:<span className="span">(least 8 characters)</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label className="label">Repeat password:</label>
              <input
                type="password"
                value={repeatPassword}
                required
                onChange={(e) => {
                  checkPasswordMatch(e);
                }}
              />
              {!passwordMatch && <p className="red">Password doesn't match.</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-elem">
            <div>
              <label className="label">
                JMBG:<span className="span">(least 13 characters)</span>
              </label>
              <input
                type="text"
                required
                value={jmbg}
                onChange={(e) => setJmbg(e.target.value)}
                onBlur={check}
              />
              {errJmbg && <p className="red">Jmbg already exists.</p>}
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label className="label">Gender:</label>
              <select
                onChange={(e) => setGender(e.target.value)}
                className="select"
                defaultValue=" "
              >
                <option disabled value=" ">
                  &#160;
                </option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-elem">
            <div className="row-elem__wrap">
              <div className="row-elem__street">
                <label className="label">Street:</label>
                <input
                  type="text"
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="row-elem__number">
                <label className="label">Number:</label>
                <input
                  type="text"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label className="label">City:</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-elem">
            <div>
              <label className="label">Country:</label>
              <input
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label className="label">Postal number:</label>
              <input
                type="text"
                required
                value={postalCode}
                onChange={(e) => setPostal(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-elem">
            <div>
              <label className="label">Occupation:</label>
              <input
                type="text"
                required
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label className="label">Education:</label>
              <input
                type="text"
                required
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row submit">
          <button onClick={registerNewUser}>Submit</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default RegisterUser;

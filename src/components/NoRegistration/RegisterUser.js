import "./RegisterUser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterUser = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
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

  const registerNewUser = (e) => {
    e.preventDefault();

    const checkUniqueDto = {
      email,
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

    const newUserDto = {
      firstname,
      lastname,
      email,
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

    console.log(newUserDto);

    if (passwordMatch && !errEmail && !errJmbg && !errPhone) {
      console.log("USAO SAM ODJE");
      fetch("http://localhost:8080/api/Patient/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserDto),
      }).then(() => {
        alert("?");
        navigate("/sysadmin/users");
      });
    }
  };

  const checkPasswordMatch = (e) => {
    setRepeatPassword(e.target.value);
    if (password !== e.target.value) setPasswordMatch(false);
    else setPasswordMatch(true);
  };

  return (
    <div className="card">
      <h1>Register</h1>
      <form>
        <div className="row">
          <div className="row-elem">
            <div>
              <label>First Name:</label>
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
              <label>Last Name:</label>
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
              <label>Email:</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errEmail && <p className="red">Email already exists.</p>}
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label>Phone number:</label>
              <input
                type="text"
                required
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errPhone && <p className="red">Phone number already exists.</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-elem">
            <div>
              <label>Password:</label>
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
              <label>Repeat password:</label>
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
              <label>JMBG:</label>
              <input
                type="text"
                required
                value={jmbg}
                onChange={(e) => setJmbg(e.target.value)}
              />
              {errJmbg && <p className="red">Jmbg already exists.</p>}
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label>Gender:</label>
              <select onChange={(e) => setGender(e.target.value)}>
                <option selected disabled value=" ">
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
                <label>Street:</label>
                <input
                  type="text"
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="row-elem__number">
                <label>Number:</label>
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
              <label>City:</label>
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
              <label>Country:</label>
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
              <label>Postal number:</label>
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
              <label>Occupation:</label>
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
              <label>Education:</label>
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
          <button onClick={registerNewUser}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;

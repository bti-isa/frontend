import "./RegisterUser.css";
import { useState } from "react";

const RegisterUser = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [jmbg, setJmbg] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostal] = useState();
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");

  const registerNewUser = (e) => {
    const newUserDto = {
      firstname,
      lastname,
      email,
      phoneNumber,
      password,
      jmbg,
      gender,
      address: {
        street,
        number,
        city,
        country,
        postalCode,
        longitude: 0,
        latitude: 0,
      },
      occupation,
      education,
      role: "PATIENT",
    };
    console.log(newUserDto);

    fetch("http://localhost:8080/api/User/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserDto),
    }).then(() => {
      console.log("new bloog added");
    });
  };

  return (
    <div className="card">
      <h1>Register</h1>
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
            <input type="password" required />
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
    </div>
  );
};

export default RegisterUser;

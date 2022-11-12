import "./RegisterUser.css";
const RegisterUser = () => {
  return (
    <div className="card">
      <h1>Register</h1>
      <div className="row">
        <div className="row-elem">
          <label>First Name:</label>
          <input type="text" />
        </div>
        <div className="row-elem">
          <label>Last Name:</label>
          <input type="text" />
        </div>
      </div>
      <div className="row">
        <div className="row-elem">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="row-elem">
          <label>Phone number:</label>
          <input type="text" />
        </div>
      </div>
      <div className="row">
        <div className="row-elem">
          <label>Password:</label>
          <input type="email" />
        </div>
        <div className="row-elem">
          <label>Repeat password:</label>
          <input type="text" />
        </div>
      </div>
      <div className="row">
        <div className="row-elem">
          <label>JMBG:</label>
          <input type="text" />
        </div>
        <div className="row-elem">
          <label>Gender:</label>
          <select>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="row-elem">
          <div className="row-elem__wrap">
            <div className="row-elem__street">
              <label>Street:</label>
              <input type="text" />
            </div>
            <div className="row-elem__number">
              <label>Number:</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="row-elem">
          <label>City:</label>
          <input type="text" />
        </div>
      </div>
      <div className="row">
        <div className="row-elem">
          <label>Country:</label>
          <input type="text" />
        </div>
        <div className="row-elem">
          <label>Postal number:</label>
          <input type="text" />
        </div>
      </div>
      <div className="row submit">
        <button>Register</button>
      </div>
    </div>
  );
};

export default RegisterUser;

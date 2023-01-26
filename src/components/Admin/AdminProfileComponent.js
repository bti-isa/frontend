import { axiosInstance } from "config/https";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import classes from "./AdminProfileComponent.css";

const AdminProfileComponent = (props) => {
  const [data, setData] = useState(props.data);
  const [disabled, setDisabled] = useState(true);
  const [disabledPass, setDisabledPass] = useState(true);
  const [showEditButton, setShowEditButton] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassowrd] = useState();
  const [userInput, setUserInput] = useState({
    id: props.data.id,
    enteredFirstName: props.data.firstname,
    enteredLastName: props.data.lastname,
    enteredPhone: props.data.phoneNumber,
    enteredCity: props.data.address.city,
    enteredStreet: props.data.address.street,
    enteredNumber: props.data.address.number,
    enteredPostalCode: props.data.address.postalCode,
  });
  const navigate = useNavigate();

  const firstNameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredFirstName: event.target.value,
    });
  };

  const lastNameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredLastName: event.target.value,
    });
  };

  const phoneChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredPhone: event.target.value,
    });
  };

  const cityChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredCity: event.target.value,
    });
  };

  const streetChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredStreet: event.target.value,
    });
  };

  const numberChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredNumber: event.target.value,
    });
  };

  const postalCodeChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredPostalCode: Number(event.target.value),
    });
  };

  const newConfirmPasswordHandler = (event) => {
    setConfirmPassowrd(event.target.value);
  };

  const newPasswordHandler = (event) => {
    setNewPassword(event.target.value);
  };

  const handleUpdate = () => {
    setShowEditButton(false);
    setDisabled(false);
  };

  const handleCancel = () => {
    setShowEditButton(true);
    setDisabled(true);
    setIsPassword(false);
  };

  const handleChangePassword = () => {
    setShowEditButton(false);
    setIsPassword(true);
    setDisabledPass(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isPassword) {
      axiosInstance
        .put(`http://localhost:8080/api/User/password/change`, {
          email: data.username,
          password: newPassword,
          confirmPassword: confirmPassword,
        })
        .then((response) => {
          toast("You have successffully changed your password");
        });
    } else {
      axiosInstance
        .put(`http://localhost:8080/api/Admin/profile-update`, userInput)
        .then((response) => {
          setDisabled(true);
          setShowEditButton(true);
          if (response) {
            toast("You have successfully updated your account info");
            navigate("/admin-profile");
            return;
          }

          toast("Something went wrong, please try again");
        });
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-title">My Account</div>
      <div className="data">
        <div className="data-left">
          <div className="data-item">
            <label className="data-label">First Name:</label>
            <input
              className={disabled ? "data-input" : "data-input editable"}
              disabled={disabled}
              value={userInput.enteredFirstName}
              onChange={firstNameChangeHandler}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Last Name:</label>
            <input
              className={disabled ? "data-input" : "data-input editable"}
              disabled={disabled}
              value={userInput.enteredLastName}
              onChange={lastNameChangeHandler}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Email:</label>
            <input
              className="data-input"
              disabled
              value={data.username}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Jmbg:</label>
            <input
              className="data-input"
              disabled
              value={data.jmbg}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Gender:</label>
            <input
              className="data-input"
              disabled
              value={data.gender}
              type="text"
            />
          </div>
          {isPassword && (
            <>
              <div className="data-item password-item">
                <label className="data-label">New Password:</label>
                <input
                  className={
                    disabledPass ? "data-input" : "data-input editable"
                  }
                  disabled={disabledPass}
                  onChange={newPasswordHandler}
                  type="password"
                />
              </div>
              <div className="data-item">
                <label className="data-label">Confirm Password:</label>
                <input
                  className={
                    disabledPass ? "data-input" : "data-input editable"
                  }
                  disabled={disabledPass}
                  onChange={newConfirmPasswordHandler}
                  type="password"
                />
              </div>
            </>
          )}
        </div>
        <div className="data-right">
          <div className="data-item">
            <label className="data-label">Phone Number:</label>
            <input
              className={disabled ? "data-input" : "data-input editable"}
              disabled={disabled}
              value={userInput.enteredPhone}
              onChange={phoneChangeHandler}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">City:</label>
            <input
              className={disabled ? "data-input" : "data-input editable"}
              disabled={disabled}
              value={userInput.enteredCity}
              onChange={cityChangeHandler}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Street:</label>
            <input
              className={disabled ? "data-input" : "data-input editable"}
              disabled={disabled}
              value={userInput.enteredStreet}
              onChange={streetChangeHandler}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Number:</label>
            <input
              className={disabled ? "data-input" : "data-input editable"}
              disabled={disabled}
              value={userInput.enteredNumber}
              onChange={numberChangeHandler}
              type="text"
            />
          </div>
          <div className="data-item">
            <label className="data-label">Postal Code:</label>
            <input
              className={disabled ? "data-input" : "data-input editable"}
              disabled={disabled}
              value={userInput.enteredPostalCode}
              onChange={postalCodeChangeHandler}
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="admin-update-container">
        {showEditButton && (
          <>
            <button
              onClick={handleChangePassword}
              className="admin-update-button password-change"
            >
              Change Password
            </button>
            <button onClick={handleUpdate} className="admin-update-button">
              Edit
            </button>
          </>
        )}
        {!showEditButton && (
          <>
            <button className="admin-update-button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="admin-update-button" onClick={handleSubmit}>
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminProfileComponent;

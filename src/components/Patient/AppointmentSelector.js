import "./AppointmentSelector.css";
import { axiosInstance } from "../../config/https"
import { useState, useEffect } from "react";
import CONSTANTS from "constants/constants";
import TablePagination from "@mui/material/TablePagination";
import { TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { toast } from "react-toastify";

const AppointmentSelector = ({ appointmentId, setAppointmentId }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [dateTime, setDateTime] = useState(null);
    const [direction, setDirection] = useState("ASC");

    const getData = () => {
        if (dateTime === null) {
            return;
        }
        axiosInstance
            .get(
                `http://localhost:8080/api/Appointment/${page}/${rowsPerPage}/${direction}`, {
                params: {
                    'dateTime': dateTime
                }
            }
            )
            .then(
                (res) => {
                    setData(res.data);
                },
                (err) => {
                    toast("No bloodbanks match your criteria.");
                }
            );
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        getData();
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
        setDirection("ASC");
        getData();
    };

    const show = (event) => {
        getData();
    }

    const sortRating = (event) => {
        if (direction === "ASC") {
            setDirection("DESC");
        } else if (direction === "DESC") {
            setDirection("ASC");
        } else {
            setDirection("ASC");
        }
        getData();
    }

    const rowClick = (appointmentId) => {
        console.log(appointmentId)
        setAppointmentId(appointmentId);
    }

    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Schedule appointment</h1>
                </div>
                <div className="chooseContainer">
                    <div className="datePicker">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                ampm={false}
                                renderInput={(props) => <TextField {...props} className="myDatePicker" />}
                                label="Choose date and time"
                                value={dateTime}
                                onChange={(newDateTime) => {
                                    setDateTime(newDateTime.$d);
                                    setDirection("ASC");
                                }}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="button-wrap">
                        <button className="button" onClick={show}>
                            Show
                        </button>
                    </div>
                </div>
                <div className="tableContainer">
                    <div>
                        <table className="table" style={{ width: "800px", overflowY: "true" }}>
                            <thead>
                                <tr className="tr">
                                    <th
                                        className="th"
                                    >
                                        Name
                                    </th>
                                    <th
                                        className="th"
                                    >
                                        Country
                                    </th>
                                    <th
                                        className="th"
                                    >
                                        City
                                    </th>
                                    <th
                                        className="th"
                                    >
                                        Street
                                    </th>
                                    <th className="th" onClick={sortRating}>
                                        Rating
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((appointment) => (
                                    <tr className="tr" key={appointment.id} onClick={() => rowClick(appointment.id)}>
                                        <td className="td">{appointment.bloodBank.name}</td>
                                        <td className="td">{appointment.bloodBank.address.country}</td>
                                        <td className="td">{appointment.bloodBank.address.city}</td>
                                        <td className="td">
                                            {appointment.bloodBank.address.street + " " + appointment.bloodBank.address.number}
                                        </td>
                                        <td className="td">{appointment.bloodBank.rating}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <TablePagination
                            rowsPerPageOptions={[3, 5, 10]}
                            component="div"
                            count={10}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppointmentSelector;
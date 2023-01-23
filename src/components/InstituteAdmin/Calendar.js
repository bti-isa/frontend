import Typography from '@mui/material/Typography'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { axiosInstance } from 'config/https';
import { Container } from '@mui/system';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import "./Calendar.css";
import { TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { toast } from "react-toastify";
import jwt from "jwt-decode";

const CalendarComponent = () => {
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    rerender()
  }, [])

  const rerender = () => {
    axiosInstance.get('/Appointment/admins-bloodBank', {
      params: {
        username: jwt(JSON.stringify(localStorage.getItem("token"))).sub
      }
    })
      .catch((error) => {
        console.error(error)
        return null;
      })
      .then((response) => {
        let temp = []
        response.data.map((appointment) => {
          temp.push({
            id: appointment.id,
            resourceId: appointment.id,
            start: formatDate(appointment.dateTime),
            end: formatDate1(appointment.dateTime, appointment.duration),
            title: (appointment.patient == null ? 'Available' : appointment.patient.firstname + ' ' + appointment.patient.lastname)
          })
        })
        let calendarEl = document.getElementById('calendar');
        let calendar = new Calendar(calendarEl, {
          plugins: [dayGridPlugin, listPlugin, timeGridPlugin],
          now: today(),
          aspectRatio: 1.8,
          headerToolbar: {
            left: 'today prev,next',
            center: 'title',
            right: 'timeGridWeek,dayGridMonth,listWeek'
          },
          initialView: 'dayGridMonth',
          events: temp
        });
        calendar.render();
      })
  }

  const today = () => {
    let today = new Date;
    return (today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()).toString()
  }

  const test = (date) => {
    let x = moment(date).format("yyyy-MM-ddTHH:mm:ss")
  }

  const formatDate = (date) => {
    let formatted = date.charAt(6) + date.charAt(7) + date.charAt(8) + date.charAt(9)
      + "-" + date.charAt(3) + date.charAt(4)
      + "-" + date.charAt(0) + date.charAt(1)
      + "T" + date.charAt(12) + date.charAt(13)
      + ":" + date.charAt(15) + date.charAt(16) +
      ":00"

    let x = moment(formatted).format("yyyy-MM-DDTHH:mm:ss")
    return x
  }
  const formatDate1 = (date, duration) => {
    let formatted = formatDate(date)
    let x = moment(formatted).add(duration, 'minutes').format("yyyy-MM-DDTHH:mm:ss")
    return x
  }

  const create = () => {
    if (dateTime == null) {
      toast("Please enter date and time.");
      return;
    }
    let dto = {
      dateTime: dateTime,
      username: jwt(JSON.stringify(localStorage.getItem("token"))).sub,
    }
    axiosInstance
      .post(
        `http://localhost:8080/api/Appointment/`, dto
      )
      .then(
        (res) => {
          toast("Appointment is successfullty created.");
          rerender();
        },
        (err) => {
          toast(err.response.data);
        }
      );
  }

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h2" color="tertiary">
        Blood bank calendar
      </Typography>
      <div className='wrap-container'>
        <div style={{ width: '90%', margin: '10px auto' }} id="calendar"></div>
        <div className='create-appointment-wrapper'>
          <div className="datePicker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                ampm={false}
                renderInput={(props) => <TextField {...props} />}
                label="Choose date"
                value={dateTime}
                onChange={(newDateTime) => {
                  setDateTime(newDateTime.$d);
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="createButton-wrap">
            <button className="createButton" onClick={create}>
              Create appointment
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CalendarComponent;
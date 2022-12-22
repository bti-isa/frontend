import Typography from '@mui/material/Typography'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { axiosInstance } from 'config/https';
import { Container } from '@mui/system';
import moment from 'moment/moment';
//import { useState } from 'react';

const CalendarComponent = () => {
  //const [appointments, setAppointments] = useState([])

  axiosInstance.get('/Appointment/all')
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
          title: (appointment.patient == null ? 'Available' : appointment.patient.firstName + ' ' + appointment.patient.lastName)
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

    const today = () => {
      let today = new Date;
      return (today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()).toString()
    }

    const test = (date) => {
      let x = moment(date).format("yyyy-MM-ddTHH:mm:ss")
      console.log(x)
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

  return (
    <Container sx={{textAlign: 'center'}}>
      <Typography variant="h2" color="tertiary">
        Blood bank calendar
      </Typography>
      <div style={{ width: '90%', margin: '10px auto' }} id="calendar"></div>
    </Container>
  );
}

export default CalendarComponent;
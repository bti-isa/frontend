import Typography from '@mui/material/Typography'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const CalendarComponent = () => {

    const render = () => {
        let calendarEl = document.getElementById('calendar');
        console.log('render')
        if(calendarEl != null) {
            console.log('not null')
            let calendar = new Calendar(calendarEl, {
                plugins: [ dayGridPlugin, listPlugin, timeGridPlugin ],
                now: '2022-12-22',
                aspectRatio: 1.8,
                headerToolbar: {
                  left: 'today prev,next',
                  center: 'title',
                  right: 'timeGridWeek,dayGridMonth,listWeek'
                },
                initialView: 'dayGridMonth',
                events: [
                  { id: '1', resourceId: '1', start: '2022-12-22T02:00:00', end: '2022-12-22T07:00:00', title: 'event 1' },
                  { id: '2', resourceId: '2', start: '2022-12-22T05:00:00', end: '2022-12-22T22:00:00', title: 'event 2' },
                  { id: '3', resourceId: '3', start: '2022-12-22T05:00:00', end: '2022-12-22T22:00:00', title: 'event 3' },
                  { id: '4', resourceId: '4', start: '2022-12-22T03:00:00', end: '2022-12-22T08:00:00', title: 'event 4' },
                  { id: '5', resourceId: '5', start: '2022-12-22T00:30:00', end: '2022-12-22T02:30:00', title: 'event 5' }
                ]
              });
            
              calendar.render();
        }
    }
    
    return ( 
        <>
            <Typography variant="h5" color="tertiary" onClick={render}>
                This is the calendar component
            </Typography>
            <div style={{width: '90%', margin: '10px auto'}} id="calendar"></div>
        </>
     );
}
 
export default CalendarComponent;
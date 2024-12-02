document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('cal');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        googleCalendarApiKey: 'AIzaSyCR6M8NZ-KfOBZXdTcLNGcGDbOQWplqtqw',
        events: { 
            googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com'
        },
        headerToolbar: {
            start: 'title',
            end: 'prev,next'
        },
        height: 520,
        allDaySlot: true,
        nowIndicator: true,
        scrollTime: "08:00:00",
        eventContent: recolorCalendarEvent,
    });
    calendar.render();
});

function recolorCalendarEvent(arg) {
    arg.backgroundColor = 'rgb(42, 71, 82)';
    arg.borderColor = 'rgb(42, 71, 82)';
    
}
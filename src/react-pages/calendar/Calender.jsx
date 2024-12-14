import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // For Month View
import { getDate } from './cmsData.ts'; // Ensure getDate is imported correctly
import './calendar.css'; // Import the custom CSS file

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => { 
        // Define the async function inside useEffect
        const fetchData = async () => {
            const dates = await getDate(); // Fetch the event data
            console.log(dates); // Log the data to check
            setEvents(dates); // Set the fetched events to the state
        };

        fetchData(); // Call the async function
    }, []); // Empty dependency array to run only once on mount

    return (
        <div style={{ width: '100%', height: 'auto', marginBottom: '50px', padding: '100px' }}>
            <FullCalendar
                plugins={[dayGridPlugin]}  // Add dayGridPlugin to enable month and week views
                initialView="dayGridMonth"  // Default view is month
                headerToolbar={{
                    left: 'prev,next',  // Navigation buttons
                    center: 'title',    // Title of the calendar (month/year)
                    right: 'dayGridWeek,dayGridDay'  // Options to switch between month, week, and day views
                }}
                events={events.map(event => ({
                    title: event.eventName,
                    start: event.startDate,
                    end: event.endDate,
                }))}
                weekNumbers={false}  // Enable week numbers (optional)
                contentHeight="auto"  // Let the calendar adjust the height based on content
                fixedWeekCount={true}  // Try to force the calendar to always show 6 weeks
                style={{ overflow: 'hidden' }} // Prevent overflow and scrollbars
            />
        </div>
    );
};

export default CalendarComponent;

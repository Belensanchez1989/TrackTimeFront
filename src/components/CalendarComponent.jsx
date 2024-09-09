import React, { useState } from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function CalendarComponent({ onDateSelect }) {
    const [selectedDate, setSelectedDate] = useState(today(getLocalTimeZone()));

    const handleDateChange = (date) => {
        setSelectedDate(date); // Actualiza la fecha seleccionada
        onDateSelect(date); // Notifica a CalendarPage sobre la nueva selección
    };

    return (
        <div className="flex justify-center items-center gap-4 items-center py-1 ">
            <Calendar
                aria-label="Date (Min Date Value)"
                defaultValue={selectedDate}
                minValue={today(getLocalTimeZone())}
                onChange={handleDateChange} // Maneja el cambio de fecha
            />
        </div>
    );
}
import React, { useState } from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function CalendarComponent({ onDateSelect }) {
    const [selectedDate, setSelectedDate] = useState(today(getLocalTimeZone()));

    const handleDateChange = (date) => {
        const formattedDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`; // Convertir a cadena YYYY-MM-DD
        setSelectedDate(date); // Actualiza la fecha seleccionada
        onDateSelect(formattedDate); // Pasar la fecha en formato de cadena
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
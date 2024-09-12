import React, { useState } from "react";
import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";

export default function InputHour({ onTimeSelect }) {
    const [startHour, setStartHour] = useState(new Time(11, 45));
    const [endHour, setEndHour] = useState(new Time(12, 45));

    const handleStartHourChange = (time) => {

        const formattedStartHour = `${time.hour}:${time.minute}`;  // Convertir a cadena HH:MM
        setStartHour(time);
        onTimeSelect(formattedStartHour, `${endHour.hour}:${endHour.minute}`); // Pasar la cadena
    };

    const handleEndHourChange = (time) => {
        const formattedEndHour = `${time.hour}:${time.minute}`;  // Convertir a cadena HH:MM
        setEndHour(time);
        onTimeSelect(`${startHour.hour}:${startHour.minute}`, formattedEndHour); // Pasar la cadena
    };

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <TimeInput
                label="Hora de inicio"
                value={startHour}
                onChange={handleStartHourChange}
            />
            <TimeInput
                label="Hora de finalización"
                value={endHour}
                onChange={handleEndHourChange}
            />
        </div>
    );
}
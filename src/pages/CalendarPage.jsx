import React, { useState } from "react";
import CalendarComponent from "../components/CalendarComponent";
import ProgressTop from "../components/Progress";
import ButtonHome from "../components/Button";
import DividerTop from "../components/Divider";
import { useNavigate } from "react-router-dom";
import InputHour from "../components/InputHour";

export default function CalendarPage() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedStartHour, setSelectedStartHour] = useState(null);
    const [selectedEndHour, setSelectedEndHour] = useState(null);

    const handleConfirmDate = () => {
        if (selectedDate && selectedStartHour && selectedEndHour) {
            
            localStorage.setItem('selectedDate', selectedDate);  
            localStorage.setItem('selectedStartHour', selectedStartHour); 
            localStorage.setItem('selectedEndHour', selectedEndHour); 
    
            console.log('Fecha y horas seleccionadas:', selectedDate, selectedStartHour, selectedEndHour);
            navigate('/PreConfirm-Page'); 
        } else {
            console.error('No se ha seleccionado la fecha o las horas');
        }
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const handleTimeSelect = (start, end) => {
        setSelectedStartHour(start);
        setSelectedEndHour(end);
    };

    return (
        <>
            <ProgressTop value={50} />
            <DividerTop>Selecciona la fecha</DividerTop>
            <CalendarComponent onDateSelect={handleDateSelect} />
            <InputHour onTimeSelect={handleTimeSelect} />
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={handleConfirmDate}>Confirmar Fecha y Hora</ButtonHome>
            </div>
        </>
    );
}
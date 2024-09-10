import React, { useState } from "react";
import CalendarComponent from "../components/CalendarComponent";
import ProgressTop from "../components/Progress";
import FooterDivider from "../components/Footer";
import ButtonHome from "../components/Button";
import DividerTop from "../components/Divider";
import { useNavigate } from "react-router-dom";
import useApi from "../services/useApi";
import { CALENDARY } from "../config/urls";
import InputHour from "../components/InputHour";


export default function CalendarPage() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);


    const { data, loading, error } = useApi({
        apiEndpoint: `${CALENDARY}days/`,
        method: 'POST',
        body: {
            day: selectedDate?.day,
            month: selectedDate?.month,
            year: selectedDate?.year
        }
    });

    const handleConfirmDate = () => {
        if (selectedDate) {
            console.log('Fecha seleccionada:', selectedDate);
            // Aquí harías el envío al backend
            localStorage.setItem('selectedDate', JSON.stringify(selectedDate));
            navigate('/PreConfirm-Page');
        } else {
            console.error('No se ha seleccionado ninguna fecha');
        }
    };

    const handleDateSelect = (date) => {
        // Actualiza el estado con la fecha seleccionada
        setSelectedDate({
            day: date.day,
            month: date.month,
            year: date.year
        });
    };

    return (
        <>
            <ProgressTop value={50} />
            <DividerTop>Selecciona la fecha</DividerTop>
            <CalendarComponent onDateSelect={handleDateSelect} />
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={handleConfirmDate}>Confirmar Fecha</ButtonHome>   
            </div>
            <InputHour/>
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={handleConfirmDate}>Confirmar Fecha</ButtonHome>   
            </div>

            <FooterDivider />
        </>
    );
}
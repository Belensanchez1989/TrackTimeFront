import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/Button";
import ProgressTop from "../components/Progress";
import DividerTop from "../components/Divider";
import { Textarea } from "@nextui-org/react";
import UseApi from "../services/useApi";
import { USERS, RESERVATIONS } from "../config/urls";
import axios from "axios";

export default function PreConfirmPage() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        service: '',
        date: localStorage.getItem('selectedDate') || 'Fecha no seleccionada',
        startHour: localStorage.getItem('selectedStartHour') || 'Hora de inicio no seleccionada',
        endHour: localStorage.getItem('selectedEndHour') || 'Hora de fin no seleccionada',
        name: '',
        lastName: '',
        email: '',
        userId:null,
    });

    const userId = localStorage.getItem('userId');
    const { data: userData } = UseApi({ apiEndpoint: `${USERS}${userId}` });

    useEffect(() => {
        if (userData) {
            setDetails(prevDetails => ({
                ...prevDetails,
                service: userData.service || 'Servicio no seleccionado',
                name: userData.name || 'Nombre no ingresado',
                lastName: userData.last_name || 'Apellido no ingresado',
                email: userData.email || 'Email no ingresado',
            }));
        }
    }, [userData]);

    const handleConfirmReservation = async () => {
        try {
            console.log("userId almacenado en localStorage:", userId);

            const reservationData = {
                user: Number(userId),
                date: details.date,
                start_hour: details.startHour,
                end_hour: details.endHour,
            };

            console.log("Datos enviados:", reservationData);

            const response = await axios.post(RESERVATIONS, reservationData);

            console.log("Reserva confirmada:", response);

            navigate('/Confirmation-Page');
        } catch (error) {
            console.error("Error al confirmar la reserva:", error);

            if (error.response && error.response.data) {
                console.log("Detalles del error:", error.response.data);
            }
        }
    };

    const descripciones = [
        `Servicio: ${details.service}`,
        `Día: ${details.date}`,
        `Hora de inicio: ${details.startHour}`,
        `Hora de fin: ${details.endHour}`,
        `Nombre: ${details.name}`,
        `Apellido: ${details.lastName}`,
        `Email: ${details.email}`,
    ];

    return (
        <>
            <ProgressTop value={80} />
            <DividerTop>Revisa tu reserva</DividerTop>
            {descripciones.map((descripcion, index) => (
                <Textarea key={index} isReadOnly value={descripcion} className="max-w-xs mt-5 flex flex-col justify-center ml-10" />
            ))}
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={() => navigate('/Calendar-Page')}>Volver</ButtonHome>
                <ButtonHome onClick={handleConfirmReservation}>Confirmar</ButtonHome>
            </div>
        </>
    );
}
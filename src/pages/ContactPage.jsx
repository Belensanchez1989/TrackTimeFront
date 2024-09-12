import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/Button";
import ProgressTop from "../components/Progress";
import DividerTop from "../components/Divider";
import { Input, Textarea } from "@nextui-org/react";
import axios from 'axios';
import { USERS } from "../config/urls";



export default function ContactPage() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');

    const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito
    const [errorMessage, setErrorMessage] = useState('');     // Estado para el mensaje de error

    const navigate = useNavigate();

    const handleNameChange = (e) => setName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleServiceChange = (e) => setService(e.target.value);

    // Validación simple de campos
    const isValid = () => {
        if (!name || !lastName || !email || !service) {
            setErrorMessage('Todos los campos son obligatorios');
            return false;
        }
        return true;
    };

    const handleConfirmClick = async () => {
        if (!isValid()) return;  // Si no es válido, no ejecuta el POST

        try {
            // Crear el usuario
            const response = await axios.post(USERS, {
                name,
                last_name: lastName,
                email,
                service,
            });

            const userId = response.data.id; // Asumiendo que la API devuelve el ID del usuario

            console.log('Usuario creado con ID:', userId);

            // Mensaje de éxito
            setSuccessMessage('Datos confirmados correctamente');
            localStorage.setItem('userId', userId); // Guardamos el ID si es necesario

            // Ocultar el mensaje después de 2 a 3 segundos
            setTimeout(() => {
                setSuccessMessage('');
                navigate('/Calendar-Page'); // Continuar a la siguiente página
            }, 2000);

        } catch (error) {
            console.error('Error al crear el usuario:', error);
            setErrorMessage('Hubo un problema al crear el usuario');

            // Ocultar el mensaje de error después de 2 a 3 segundos
            setTimeout(() => setErrorMessage(''), 2000);
        }
    };

    return (
        <>
            <ProgressTop value={25} />
            <DividerTop>Datos de contacto</DividerTop>
            <h2>Rellena los campos con tu información</h2>

            {successMessage && (
                <div className="fixed top-5 right-5 bg-green-500 text-white p-3 rounded shadow-lg flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div className="fixed top-5 right-5 bg-red-500 text-white p-3 rounded shadow-lg">
                    {errorMessage}
                </div>
            )}

            <Textarea
                isRequired
                label="Nombre"
                labelPlacement="outside"
                placeholder="Ingresa tu nombre"
                className="max-w-xs"
                value={name}
                onChange={handleNameChange}
            />
            <Textarea
                isRequired
                label="Apellido"
                labelPlacement="outside"
                placeholder="Ingresa tu apellido"
                className="max-w-xs"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <Input
                isRequired
                label="Servicio"
                type="text"
                placeholder="Ingresa el servicio"
                className="max-w-xs"
                value={service}
                onChange={handleServiceChange}
            />
            <Input
                isRequired
                type="email"
                label="email"
                defaultValue="email@email.org"
                className="max-w-xs"
                value={email}
                onChange={handleEmailChange}
            />
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={handleConfirmClick}>Confirmar y continuar</ButtonHome>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={() => navigate('/Home')}>Volver</ButtonHome>
            </div>
        </>
    );
}
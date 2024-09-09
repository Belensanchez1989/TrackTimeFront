import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/Button";
import ProgressTop from "../components/Progress";
import FooterDivider from "../components/Footer";
import DividerTop from "../components/Divider";
import { Input, Textarea } from "@nextui-org/react";
import axios from 'axios';
import { USERS } from "../config/urls";

export default function ContactPage() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (e) => setName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);

    const handleConfirmClick = async () => {
        try {
            // 1. Crear el usuario
            const response = await axios.post(USERS, {
                name,
                last_name: lastName,
                age,
                email,
            });

            const userId = response.data.id; // Asumiendo que la API devuelve el ID del usuario

            console.log('Usuario creado con ID:', userId);

            // Puedes guardar el ID del usuario en el estado o en localStorage si es necesario
            localStorage.setItem('userId', userId);

            // Luego de crear el usuario, proceder con la creación de la reserva
            // Esto lo haremos en el siguiente paso, pero asegúrate de que todo esté listo aquí.

        } catch (error) {
            console.error('Error al crear el usuario:', error);
        }
    };




    // Aquí va el código para manejar el botón Confirmar y el botón Continuar
    const handleHomePageClick = () => {
        console.log('Redirecting to Calendar-Page');
        navigate('/Home');
    };

    const handleServicesPageClick = () => {
        console.log('Redirecting to Contact-Page');
        navigate('/Services-Page');
    };

    return (
        <>
            <ProgressTop value={60} />
            <DividerTop>Datos de contacto</DividerTop>
            <h2>Rellena los campos con tu información</h2>
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
                type="number"
                label="Edad"
                placeholder="Ingresa tu edad"
                className="max-w-xs"
                value={age}
                onChange={handleAgeChange}
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
                <ButtonHome onClick={handleConfirmClick}>Confirmar</ButtonHome>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={handleHomePageClick}>Volver</ButtonHome>
                <ButtonHome onClick={handleServicesPageClick}>Continuar</ButtonHome>
            </div>
            <FooterDivider />
        </>
    );
}
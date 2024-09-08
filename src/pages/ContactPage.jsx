import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/Button";
import ProgressTop from "../components/Progress";
import FooterDivider from "../components/Footer";
import DividerTop from "../components/Divider";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";



export default function ContactPage() {
    const navigate = useNavigate();

    const handleCalendarPageClick = () => {
        console.log('Redirecting to Calendar-Page');
        navigate('/Calendar-Page');
    };

    const handleConfirmPageClick = () => {
        console.log('Redirecting to Contact-Page');
        navigate('/Confirm-Page');
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
            />
            <Textarea
                isRequired
                label="Apellido"
                labelPlacement="outside"
                placeholder="Ingresa tu apellido"
                className="max-w-xs"
            />
            <Input
                isRequired
                type="email"
                label="email"
                defaultValue="email@email.org"
                className="max-w-xs"
            />
            <h2>Notas para el estudio</h2>
            <Textarea
                label="Notas"
                labelPlacement="outside"
                placeholder="Deja una nota"
                className="max-w-xs"
            />
            <div className="flex gap-8 items-center">
                <ButtonHome onClick={handleCalendarPageClick}>Volver</ButtonHome>
                <ButtonHome onClick={handleConfirmPageClick}>Continuar</ButtonHome>
            </div>
            <FooterDivider />
        </>
    );
}
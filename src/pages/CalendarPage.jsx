import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/Button";
import ProgressTop from "../components/Progress";
import FooterDivider from "../components/Footer";
import DividerTop from "../components/Divider";
import CalendarComponent from "../components/CalendarComponent";
import DropdownHour from "../components/DropdownHour";



export default function CalendarPage() {
    const navigate = useNavigate();

    const handleServicesPageClick = () => {
        console.log('Redirecting to Services-Page');
        navigate('/Services-Page');
    };
    const handleContactPageClick = () => {
        console.log('Redirecting to Contact-Page');
        navigate('/Contact-Page');
    };
    return (
        <>
            <ProgressTop value={45} />
            <DividerTop>Fecha y hora</DividerTop>
            <div className="flex-col  gap-8 items-center">
                <CalendarComponent/>
                <DropdownHour/>
                <div className="flex gap-8 items-center">
                <ButtonHome onClick={handleServicesPageClick}>Volver</ButtonHome>
                <ButtonHome onClick={handleContactPageClick}>Continuar</ButtonHome>
                </div>
            </div>
            <FooterDivider />
        </>
    );
}
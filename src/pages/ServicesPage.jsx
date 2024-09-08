import React from "react";
import ServicesAll from "../components/ServicesAll";
import ProgressTop from "../components/Progress";
import FooterDivider from "../components/Footer";
import ButtonHome from "../components/Button";
import DividerTop from "../components/Divider";
import { useNavigate } from "react-router-dom";



export default function ServicesPage() {
    const navigate = useNavigate();

    const handleHomePageClick = () => {
        console.log('Redirecting to Home');
        navigate('/Home');
    };

    const handleCalendarPageClick = () => {
        console.log('Redirecting to Calendar-Page');
        navigate('/Calendar-Page');
    };

    return (
        <>
            <ProgressTop value={25}/>
            
            <DividerTop/>
            <ServicesAll />
            <div className="flex gap-8 items-center">
                <ButtonHome onClick={handleHomePageClick}>Volver</ButtonHome>
                <ButtonHome onClick={handleCalendarPageClick}>Continuar</ButtonHome>
            </div>
            <FooterDivider />
        </>
    );
}
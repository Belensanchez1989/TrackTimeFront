import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/Button";
import ProgressTop from "../components/Progress";
import FooterDivider from "../components/Footer";

export default function CalendarPage() {

    const navigate = useNavigate();

    const handleServicesPageClick = () => {
        console.log('Redirecting to Services-Page');
        navigate('/Services-Page');
    };

    return (
        <>
            <ProgressTop  value={40} />
            <div className="flex gap-8 items-center">
                <ButtonHome onClick={handleServicesPageClick}>Volver</ButtonHome>
            </div>
            <FooterDivider />
        </>
    );
}
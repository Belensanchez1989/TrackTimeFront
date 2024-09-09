import React from "react";
import ServicesAll from "../components/ServicesAll";
import ProgressTop from "../components/Progress";
import FooterDivider from "../components/Footer";
import ButtonHome from "../components/Button";
import DividerTop from "../components/Divider";
import { useNavigate } from "react-router-dom";
import ImageHome from "../components/Image";

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

    const handleConfirmSelection = () => {
        const selectedService = localStorage.getItem('selectedService');
        if (selectedService) {
            console.log(`Service selected: ${selectedService}`);
            
        } else {
            console.log('No service selected');
        }
    };

    return (
        <>
            <ProgressTop value={25} />
            <ImageHome
                width={500}
                alt="NextUI hero Image"
                src="../../public/assets/men and women making music in home recording studi.webp"
            />
            <DividerTop>Servicios</DividerTop>
            <ServicesAll />
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={handleConfirmSelection}>Confirmar Selección</ButtonHome>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={handleHomePageClick}>Volver</ButtonHome>
                <ButtonHome onClick={handleCalendarPageClick}>Continuar</ButtonHome>
            </div>
            <FooterDivider />
        </>
    );
}
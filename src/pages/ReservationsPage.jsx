import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/Button";
import FooterDivider from "../components/Footer";
import DividerTop from "../components/Divider";
import ReservationComponent from "../components/ReservationComponent";




export default function ReservationsPage() {
    const navigate = useNavigate();

    const handleHomePageClick = () => {
        console.log('Redirecting to Contact-Page');
        navigate('/Home');
    };
    return (
        <>
            <DividerTop>Tus reservas</DividerTop>
            <div className="flex-col  gap-8 items-center">
                <ReservationComponent/>
                <div className="flex-col gap-10 items-center">
                    <ButtonHome onClick={handleHomePageClick}>Consulta tus reservas</ButtonHome>
                </div>
            </div>
            <FooterDivider />
        </>
    );
}
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/Button";
import ProgressTop from "../components/Progress";
import FooterDivider from "../components/Footer";
import DividerTop from "../components/Divider";
import DetailComponent from "../components/DetailComponent";



export default function PreConfirmPage() {
    const navigate = useNavigate();

    const handleConfirmPageClick = () => {
        console.log('Redirecting to Services-Page');
        navigate('/Confirm-Page');
    };
    const handleContactPageClick = () => {
        console.log('Redirecting to Contact-Page');
        navigate('/Contact-Page');
    };
    return (
        <>
            <ProgressTop value={80} />
            <DividerTop>Revisa y confirma tu reserva</DividerTop>
            <div className="flex-col  gap-8 items-center">
                <DetailComponent/>
                <div className="flex flex-wrap justify-center gap-10 mt-5">
                    <ButtonHome onClick={handleContactPageClick}>Volver</ButtonHome>
                    <ButtonHome onClick={handleConfirmPageClick}>Confirmar</ButtonHome>
                </div>
            </div>
            <FooterDivider />
        </>
    );
}
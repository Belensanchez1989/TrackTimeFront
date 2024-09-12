import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/Button";
import ProgressTop from "../components/Progress";
import DividerTop from "../components/Divider";



export default function PreConfirmPage() {
    const navigate = useNavigate();

    const handleHomePageClick = () => {
        console.log('Redirecting to Contact-Page');
        navigate('/Home');
    };
    return (
        <>
            <ProgressTop value={100} />
            <DividerTop>Reserva confirmada con éxito</DividerTop>
            <div className="flex-col  gap-8 items-center">
                <DetailComponent/>
                <div className="flex flex-wrap justify-center gap-10 mt-5">
                    <ButtonHome onClick={handleHomePageClick}>Realizar otra reserva</ButtonHome>
                </div>
            </div>
        </>
    );
}
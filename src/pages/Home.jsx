import React from "react";
import { Navbar, NavbarMenuToggle } from "@nextui-org/react";
import DropdownComponent from "../components/Dropdown";
import FooterDivider from "../components/Footer";
import TableDay from "../components/TableDay";
import ButtonHome from "../components/Button";
import ImageHome from "../components/Image";
import { useNavigate } from "react-router-dom";




function Home() {
    const navigate = useNavigate();

    const handleServicesPageClick = () => {
        console.log('Redirecting to Services-Page');
        navigate('/Services-Page');
    };
    const handleReservationsPageClick = () => {
        console.log('Redirecting to Services-Page');
        navigate('/Reservations-Page');
    };


    return (
        <>
            <Navbar>
                <NavbarMenuToggle />
                <h1 className="text-3xl font-bold underline">
                    Track-Time!
                </h1>
            </Navbar>
            <ImageHome
                width={500}
                alt="NextUI hero Image"
                src="../../public/assets/myImage.webp" />
            <DropdownComponent />
            <TableDay />
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                <ButtonHome onClick={handleReservationsPageClick}>Mis reservas </ButtonHome>
                <ButtonHome onClick={handleServicesPageClick}>Reserva ahora</ButtonHome>
            </div>
            <FooterDivider />
        </>
    )
}

export default Home;
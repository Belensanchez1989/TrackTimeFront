import React, { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import UseApi from "../services/useApi";
import { SERVICES } from "../config/urls";


export default function DropdownComponent() {
    // Estado para los servicios
    const { data: services, loading, error } = UseApi({ apiEndpoint: SERVICES });

    // Estado para el servicio seleccionado
    const [selectedService, setSelectedService] = useState(null);

    // Si está cargando, muestra un mensaje
    if (loading) {
        return <div>Cargando servicios...</div>;
    }

    // Si hay un error, muestra el error
    if (error) {
        return <div>Error al cargar los servicios: {error}</div>;
    }

    // Manejar selección y guardar en localStorage
    const handleSelection = (servicesId) => {
        setSelectedService(servicesId);
        localStorage.setItem('selectedService', servicesId); // Guardar en localStorage
    };

    // Renderiza el dropdown con los servicios
    return (
        <div className="flex justify-center items-center gap-4 items-center py-1">
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="faded"
                        color="default"
                        size="lg"
                        css={{ fontSize: "20px" }}
                    >
                        Servicios
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Services">
                    {services.map((service) => (
                        <DropdownItem
                            key={service.id}
                            className="service-item"
                            onClick={() => handleSelection(service.id)} // Aquí corregimos la ubicación del onClick
                            css={{ fontSize: "16px" }}
                        >
                            {service.services}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
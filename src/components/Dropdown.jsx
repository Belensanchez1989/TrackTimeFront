import React, { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import UseApi from "../services/useApi"; // Asegúrate de ajustar la ruta correcta
import { SERVICES } from "../config/urls";



export default function DropdownComponent() {
    // Estado para los servicios
    const { data: services, loading, error } = UseApi({ apiEndpoint: SERVICES });

    // Si está cargando, muestra un mensaje
    if (loading) {
        return <div>Cargando servicios...</div>;
    }

    // Si hay un error, muestra el error
    if (error) {
        return <div>Error al cargar los servicios: {error}</div>;
    }

    // Renderiza el dropdown con los servicios
    return (
        <div className="flex justify-center items-center gap-4 items-center py-1">
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="faded"
                        color="default"
                        size="lg" // Cambia el tamaño del botón
                        css={{ fontSize: "20px" }} // Aumenta el tamaño del texto en el botón
                    >
                        Servicios
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Services" items={services}>
                    {(service) => (
                        <DropdownItem
                            key={service.id}
                            className="service-item"
                            css={{ fontSize: "16px" }} // Cambia el tamaño del texto en los items
                        >
                            {service.service_name} {/* Asume que el servicio tiene un campo "name" */}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function ServicesAll() {
    return (
        <RadioGroup
            label="Selecciona el Servicio"
        >
            <Radio value="Grabación">Grabación</Radio>
            <Radio value="Mezcla">Mezcla</Radio>
            <Radio value="Mastering">Mastering</Radio>
            <Radio value="Producción">Producción</Radio>
            <Radio value="Producción integral">Producción integral</Radio>
            <Radio value="Lockout">Lockout</Radio>
            <Radio value="Clases de Guitarra">Clases de Guitarra</Radio>
            <Radio value="">Clases de Canto</Radio>
        </RadioGroup>
    );
}
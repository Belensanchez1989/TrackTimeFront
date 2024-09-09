import React from 'react';
import { RadioGroup, Radio } from '@nextui-org/react';
import useServices from '../hooks/useServices'; // Ajusta la ruta según tu estructura

export default function ServicesAll() {
    const { services, loading, error } = useServices();

    // Manejar la selección de servicio
    const handleSelection = (value) => {
        localStorage.setItem('selectedService', value);
    };

    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error fetching services: {error}</p>;

    return (
        <div className="flex flex-wrap justify-center gap-10 mt-5">
            <RadioGroup label="Selecciona el Servicio">
                {services.map(service => (
                    <Radio 
                        key={service.id} 
                        value={service.service_name} 
                        onChange={() => handleSelection(service.service_name)}
                    >
                        {service.service_name}
                    </Radio>
                ))}
            </RadioGroup>
        </div>
    );
}
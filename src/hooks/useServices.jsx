import { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVICES } from '../config/urls';

const useServices = () => {
    const [services, setServices] = useState([]);  
    const [error, setError] = useState(null);      

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(SERVICES);
                console.log("Respuesta de la API:", response.data);  
                
                if (response.status === 200 && Array.isArray(response.data)) {
                    setServices(response.data);  
                } else {
                    throw new Error("La respuesta de la API no es válida o no es un array");
                }

            } catch (err) {
                console.error("Error al traer los servicios:", err);
                setError("Error al cargar los servicios. Inténtalo de nuevo más tarde.");
            } finally {
                setLoading(false);  
            }
        };

        fetchServices();
    }, []);

    return { services, loading, error }; 
};

export default useServices;
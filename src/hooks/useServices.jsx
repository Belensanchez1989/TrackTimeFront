import { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVICES } from '../config/urls'; // Ajusta la ruta según tu estructura

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(SERVICES);
                setServices(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return { services, loading, error };
};

export default useServices;
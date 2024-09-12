import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseApi = ({ apiEndpoint, method = 'GET', body = null, headers = {} }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!apiEndpoint) {
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                // Aquí no necesitas autenticación con token, por lo que omitimos esa parte
                const axiosConfig = {
                    headers: {
                        ...headers,  // Puedes pasar cualquier header adicional si lo necesitas
                    }
                };
                
                let response;
                switch (method.toUpperCase()) {
                    case 'POST':
                        response = await axios.post(apiEndpoint, body, axiosConfig);
                        break;
                    case 'PUT':
                        response = await axios.put(apiEndpoint, body, axiosConfig);
                        break;
                    case 'DELETE':
                        response = await axios.delete(apiEndpoint, axiosConfig);
                        break;
                    case 'GET':
                    default:
                        response = await axios.get(apiEndpoint, axiosConfig);
                        break;
                }
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiEndpoint, method]);

    return { data, loading, error };
};

export default UseApi;
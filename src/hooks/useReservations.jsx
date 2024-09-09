import { useEffect, useState } from "react";
import axios from "axios";


const useReservations = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtener todas las reservas
    const getReservations = async (endpoint) => {
        setLoading(true);
        try {
            const response = await axios.get(endpoint);
            setData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Crear una nueva reserva
    const createReservation = async (endpoint, reservationData) => {
        setLoading(true);
        try {
            const response = await axios.post(endpoint, reservationData);
            setData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    

    // Actualizar una reserva existente
    const updateReservation = async (endpoint, reservationData) => {
        setLoading(true);
        try {
            const response = await axios.put(endpoint, reservationData);
            setData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Eliminar una reserva
    const deleteReservation = async (endpoint) => {
        setLoading(true);
        try {
            await axios.delete(endpoint);
            setData(null);  // O actualizar los datos si es necesario
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Buscar reservas por nombre
const getReservationByName = async (endpoint, name) => {
    setLoading(true);
    try {
        const response = await axios.get(`${endpoint}?name=${encodeURIComponent(name)}`);
        setData(response.data);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

    return { data, loading, error, getReservations, getReservationByName, createReservation, updateReservation, deleteReservation };
};

export default useReservations;
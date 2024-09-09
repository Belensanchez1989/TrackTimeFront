import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    // Obtener el valor inicial del localStorage
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error al leer el localStorage:", error);
            return initialValue;
        }
    });

    // Función para actualizar el valor y almacenarlo en localStorage
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Error al escribir en el localStorage:", error);
        }
    };

    return [storedValue, setValue];
};
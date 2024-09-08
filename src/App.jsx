import React from "react";
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import Home from "./pages/Home"; // Importamos Home desde la carpeta pages
import ServicesPage from "./pages/ServicesPage";
import CalendarPage from "./pages/CalendarPage";
import ContactPage from "./pages/ContactPage";
import PreConfirmPage from "./pages/PreConfirmPage";
import ConfirmPage from "./pages/ConfirmPage";
import ReservationsPage from "./pages/ReservationsPage";




function App() {

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services-Page" element={<ServicesPage />} />
        <Route path="/Calendar-Page" element={<CalendarPage />} />
        <Route path="/Contact-Page" element={<ContactPage />} />
        <Route path="/PreConfirm-Page" element={<PreConfirmPage />} />
        <Route path="/Confirm-Page" element={<ConfirmPage />} />
        <Route path="/Reservations-Page" element={<ReservationsPage />} />
        {/* Aquí podrás añadir más rutas en el futuro */}
      </Routes>
    </Router>
  );
}

export default App;

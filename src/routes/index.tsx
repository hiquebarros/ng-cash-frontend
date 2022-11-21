import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

export default function RouterElement() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegistrationPage />}/>
            <Route path="/dashboard/:id" element={<Dashboard />}/> 
        </Routes>
    );
}
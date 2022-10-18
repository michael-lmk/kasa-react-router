import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import AppContainer from "../appContainer/AppContainer";
import Header from "../components/header/Header";
import AboutScreen from "../screens/AboutScreen";
import AccommodationDetail from "../screens/AccommodationDetailScreen";
import HomeScreen from "../screens/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

const Navigation = () => {

    return (
        <Router>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/logement" element={<AccommodationDetail />} />
                    <Route path="/qui-sommes-nous" element={<AboutScreen />} />
                    <Route path="*" element={<NotFoundScreen />} />
                </Routes>
            </AppContainer>
        </Router>
    )
}

export default Navigation
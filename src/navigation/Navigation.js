import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import AppContainer from "../appContainer/AppContainer";
import AboutScreen from "../screens/aboutScreen/AboutScreen";
import AccommodationDetail from "../screens/accommodationScreen/AccommodationScreen";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import NotFoundScreen from "../screens/notFoundScreen/NotFoundScreen";

const Navigation = () => {

    return (
        <Router>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/logement/:id" element={<AccommodationDetail />} />
                    <Route path="/qui-sommes-nous" element={<AboutScreen />} />
                    <Route path="*" element={<NotFoundScreen />} />
                </Routes>
            </AppContainer>
        </Router>
    )
}

export default Navigation
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import AboutScreen from "../screens/AboutScreen";
import AccommodationDetail from "../screens/AccommodationDetail";
import HomeScreen from "../screens/HomeScreen";

export class router extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/logement" element={<AccommodationDetail />} />
                    <Route path="/qui-sommes-nous" element={<AboutScreen />} />
                </Routes>
            </Router>
        )
    }
}

export default router
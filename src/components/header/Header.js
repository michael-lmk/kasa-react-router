import React from 'react';
import logo from '../../assets/images/logo.svg';
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {

    return (
        <header>
            <div className='header-left'>
                <img src={logo} alt="logo"></img>
            </div>
            <div className='header-middle'></div>
            <div className='header-right nav'>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to={'/'} end>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to={'/qui-sommes-nous'}>A propos</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

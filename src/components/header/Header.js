import React from 'react';
import logo from '../../assets/images/logo.svg';
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {

    return (
        <header>
            <img src={logo}></img>
            <div className='nav'>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to={'/'} end>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to={'/qui-sommes-nous'}>A propos</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

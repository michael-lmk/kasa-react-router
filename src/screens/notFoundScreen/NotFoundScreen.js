import React from 'react'
import { NavLink } from 'react-router-dom';
import './NotFoundScreen.css';
const NotFoundScreen = () => {

  return (
    <div className='subContainer'>
      <p className='code-erreur'>404</p>
      <p className='message'>Oups! La page que vous demandez n'existe pas.</p>
      <div className='div-back'>
        <NavLink className='back-home' to={'/'}>Retourner sur la page d’accueil Accueil</NavLink>
      </div>
    </div>
  )

}

export default NotFoundScreen;
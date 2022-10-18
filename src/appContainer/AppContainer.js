import React from 'react'
import Header from '../components/header/Header'
import './AppContainer.css';

function AppContainer(props) {
  return (
    <div className='container'>
        <Header />
        {props.children}
    </div>
  )
}

export default AppContainer
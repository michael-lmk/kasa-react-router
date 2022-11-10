import React, { useState } from 'react';
import chevron from '../../assets/images/chevron.svg';
import "./ItemAccordion.css";

const ItemAccordion = ({ children, title, width = "45%" }) => {

    const [ isOpen, setIsopen ] = useState(false);

    return (
        <div className='accordion-item' style={{width: width}}>
            <button onClick={() => setIsopen(!isOpen)} className='title'>
                <p>{title}</p>
                <img className={`chevron ${isOpen ? 'rotate' : '' }`} alt="chevron" src={chevron} />
            </button>
            <div className={`content ${isOpen ? "is-open" : ""  }`}>
                {children}
            </div>
        </div>
    )
}

export default ItemAccordion;

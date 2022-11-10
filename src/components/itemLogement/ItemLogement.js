import React from 'react'
import { Link } from 'react-router-dom';
import './ItemLogement.css'
const ItemLogement = ({ id, image, title }) => {
    return (
        <div
            className='item-container'>
            <Link
                to={`/logement/${id}`} 
                state={id}
                className='item-bg' 
                style={{ backgroundImage: `url(${image})` }}
            >
                    <div className='title'>
                        <h4>{title}</h4>
                    </div>
            </Link>

        </div>
    )
}

export default ItemLogement;

import React from 'react'
import { Link } from 'react-router-dom';
import './ItemLogement.css'
const ItemLogement = ({ data }) => {
    return (
        <div
            className='item-container'>
            <Link
                to={`/logement/${data.id}`} 
                state={data}
                className='item-bg' 
                style={{ backgroundImage: `url(${data.cover})` }}
            >
                    <div className='title'>
                        <h4>{data.title}</h4>
                    </div>
            </Link>

        </div>
    )
}

export default ItemLogement;

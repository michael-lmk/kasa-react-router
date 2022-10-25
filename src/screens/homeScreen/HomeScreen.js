import React from 'react'
import json from '../../data/logements.json';
import ItemLogement from '../../components/itemLogement/ItemLogement'
import './HomeScreen.css';
import bandeauImg from '../../assets/images/bandeau.svg';

const HomeScreen = () => {

    return (
        <div>
            <div style={{backgroundImage: `url(${bandeauImg})`}} className='img-container'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='list'>

                {json.map((logement, i) => {
                    return <ItemLogement key={i} data={logement} />
                })}
            </div>
        </div>

    )

}


export default HomeScreen;
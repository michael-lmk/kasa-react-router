import React from 'react'
import json from '../../data/logements.json';
import ItemLogement from '../../components/itemLogement/ItemLogement'
import './HomeScreen.css';

const HomeScreen = () => {

    return (
        <div>
            <div style={{}} className='img-container'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='list'>

                {json.map((logement, i) => {
                    return <ItemLogement key={i} id={logement.id}  image={logement.cover} title={logement.title}/>
                })}
            </div>
        </div>

    )

}


export default HomeScreen;
import React, { useEffect, useState } from 'react'
import AccommodationManager from '../models/AccomodationManager';



const HomeScreen = () => {

    const handleData = async () => {
        let model = new AccommodationManager();
        let datas = await model.getAllAcco();
        console.log(datas);
    }

    useEffect(() => {
        handleData()
            .then((logements) => {
                console.log(logements);
            });
    }, [])


    return (

        <div>HomeScreen</div>

    )

}


export default HomeScreen;
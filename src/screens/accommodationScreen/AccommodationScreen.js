import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from "react-router-dom";
import './AccommodationScreen.css';

const AccommodationScreen = () => {
  const { state } = useLocation();
  const [posOfCarrousel, setPosOfCarrousel] = useState(0)
  const [indexImgCarrousel, setIndexImgCarrousel] = useState(0)
  const [elementWidth, setElementWidth] = useState(0)

  const ref = useRef(null);
  // const carousselRef = useRef(null);

  const slideToRight = (index) => {
    if (index < state.pictures.length-1) {
      setPosOfCarrousel( ref?.current?.offsetWidth*(index+1));
      setIndexImgCarrousel((indexImgCarrousel) => indexImgCarrousel+1);
      let carousselRef = document.getElementsByClassName('carrousel');
      carousselRef.classList.toggle(`item-${index+1}`)  
    }
    

  }
  
  const slideToLeft = (index) => {
    if (index > 0) {
    setPosOfCarrousel( ref?.current?.offsetWidth * (index-1));
    setIndexImgCarrousel((indexImgCarrousel) => indexImgCarrousel-1);
    let carousselRef = document.getElementsByClassName('carrousel');
    carousselRef.classList.toggle(`item-${index-1}`)  
  }
}
  
  useEffect(() => {
    setElementWidth(ref.current.offsetWidth)
    
  }, [ref.current]);

  return (
    <div>
      <div  ref={ref} className='carrousel-container'>
        <div className='carrousel' style={{ left: (Math.abs(posOfCarrousel) * -1),}}>
          {
            state.pictures.map((picture, i) => {
              return <img style={{right: elementWidth * i , width: elementWidth }} key={i} src={picture} />;
            })
          }
        </div>
        <div className='controll'>
          <div>
            <button onClick={() => slideToLeft(indexImgCarrousel)}>{'<'}</button>
          </div>
          <div>
            <button onClick={() => slideToRight(indexImgCarrousel)}>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AccommodationScreen;
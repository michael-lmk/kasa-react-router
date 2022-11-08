import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from "react-router-dom";
import './AccommodationScreen.css';
import chevron from '../../assets/images/chevron.svg';
import star from '../../assets/images/star.svg';
import emptyStar from '../../assets/images/empty-star.svg';
import ItemAccordion from '../../components/accordion/ItemAccordion';

const AccommodationScreen = () => {
  const { state } = useLocation();
  const [indexImgCarrousel, setIndexImgCarrousel] = useState(0)
  const [elementWidth, setElementWidth] = useState(0)

  const ref = useRef(null);
  // const carousselRef = useRef(null);

  const slideToRight = (index) => {
    if (index < state.pictures.length - 1) {
      setIndexImgCarrousel((indexImgCarrousel) => indexImgCarrousel + 1);
    }
  }

  const slideToLeft = (index) => {
    if (index > 0) {
      setIndexImgCarrousel((indexImgCarrousel) => indexImgCarrousel - 1);
    }
  }

  const showCarousel = (currentIndex, pictures) => {
    return (
      <div className='carrousel' style={{ left: 0, }}>
        <img alt="appartement 1" style={{ transitionProperty: 'all', transitionDuration: '0.7s', left: (Math.abs(elementWidth) * -1), width: elementWidth }} key={currentIndex - 1} src={pictures[currentIndex - 1]} />
        <img alt="appartement 2" style={{ transitionProperty: 'all', transitionDuration: '0.7s', left: 0, width: elementWidth }} key={currentIndex} src={pictures[currentIndex]} />
        <img alt="appartement 3" style={{ transitionProperty: 'all', transitionDuration: '0.7s', left: elementWidth, width: elementWidth }} key={currentIndex + 1} src={pictures[currentIndex + 1]} />
      </div>
    );
  }

  useEffect(() => {
    setElementWidth(ref.current.offsetWidth)
  }, []);


  let host = state.host.name.split(' ')

  return (
    <div>
      <div ref={ref} className='carrousel-container'>

        {
          showCarousel(indexImgCarrousel, state.pictures)
        }

        <div className='controll'>
          <div>
            <button className='left' onClick={() => {
              slideToLeft(indexImgCarrousel);
            }}>
              <img src={chevron} alt="left" />
            </button>
          </div>
          <div className='current-img-num'>
            <span>{indexImgCarrousel} / {state.pictures.length}</span>
          </div>
          <div>
            <button className='right' onClick={() => {
              slideToRight(indexImgCarrousel)
            }}>
              <img src={chevron} alt="right" />
            </button>
          </div>
        </div>
      </div>
      <section className='header row'>
        <div>
          <div>
            <h1>{state.title}</h1>
          </div>
          <div>
            <h3>{state.location}</h3>
            <div className='content-tag'>
              {state.tags.map((element) => {
                return <div className='tag'>{element}</div>
              })}
            </div>
          </div>
        </div>
        <div className='content-host' >
          <div className='row host'>
            <div className='column name'>
              <span>{host[0]}</span>
              <span>{host[1]}</span>
            </div>
            <img alt='annonceur' src={state.host.picture} />
          </div>
          <div>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={emptyStar} alt="star" />
            <img src={emptyStar} alt="star" />
          </div>

        </div>

      </section>
      <section className='accordion-content'>
        <ItemAccordion title={'Description'}>
          <p>
            {state.description}
          </p>
        </ItemAccordion>
        <ItemAccordion title={'Équipements'}>
          <ul>
            
            {state.equipments.map((equipment) => {
              return (
                <li>{equipment}</li>
              )
            })}

          </ul>
        </ItemAccordion>
      </section>
    </div >
  )

}

export default AccommodationScreen;
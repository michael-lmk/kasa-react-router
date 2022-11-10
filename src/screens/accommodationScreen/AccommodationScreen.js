import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import './AccommodationScreen.css';
import chevron from '../../assets/images/chevron.svg';
import star from '../../assets/images/star.svg';
import emptyStar from '../../assets/images/empty-star.svg';
import ItemAccordion from '../../components/accordion/ItemAccordion';
import json from "../../data/logements.json";

const AccommodationScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [indexImgCarrousel, setIndexImgCarrousel] = useState(0);
  const [logement, setLogement] = useState(null);
  const [elementWidth, setElementWidth] = useState(0);

  const ref = useRef(null);
  // const carousselRef = useRef(null);

  const slideToRight = (index) => {
    if (index < logement.pictures.length - 1) {
      setIndexImgCarrousel((indexImgCarrousel) => indexImgCarrousel + 1);
    } else {
      setIndexImgCarrousel(() => 0);
    }
  }

  const slideToLeft = (index) => {
    if (index > 0) {
      setIndexImgCarrousel((indexImgCarrousel) => indexImgCarrousel - 1);
    } else {
      setIndexImgCarrousel(() => logement.pictures.length - 1);
    }
  }

  const showCarousel = (currentIndex, pictures) => {

    return (
      <div className='carrousel' style={{ left: 0, }}>
        <img src={pictures[currentIndex - 1 < 0 ? logement.pictures.length - 1 : currentIndex - 1]} alt="appartement 1" style={{ transitionProperty: 'all', transitionDuration: '0.7s', left: (Math.abs(elementWidth) * -1), width: elementWidth }} key={currentIndex - 1} />
        <img src={pictures[currentIndex]} alt="appartement 2" style={{ transitionProperty: 'all', transitionDuration: '0.7s', left: 0, width: elementWidth }} key={currentIndex} />
        <img src={pictures[currentIndex + 1 === logement.pictures.length ? 0 : currentIndex + 1]} alt="appartement 3" style={{ transitionProperty: 'all', transitionDuration: '0.7s', left: elementWidth, width: elementWidth }} key={currentIndex + 1} />
      </div>
    );
  }

  const getLogement = async () => {
    let logement = json.find((e) => e.id === state);
    if (logement) {
      return logement;
    } else {
      return null;
    }
  }

  useEffect(() => {
    getLogement().then((result) => {
      if (result) {
        setLogement(result);
      } else {
        navigate("/erreur-404");
      }
    });
  });

  useEffect(() => {
    if (ref.current) {
      setElementWidth(ref.current.offsetWidth);
    }
  }, [logement])
  

  if (!logement) {
    return null;
  }

  return (
    <div>
      <div ref={ref} className='carrousel-container'>

        {
          showCarousel(indexImgCarrousel, logement.pictures)
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
            <span>{indexImgCarrousel + 1} / {logement.pictures.length}</span>
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
            <h1>{logement.title}</h1>
          </div>
          <div>
            <h3>{logement.location}</h3>
            <div className='content-tag'>
              {logement.tags.map((element, i) => {
                return <div key={i} className='tag'>{element}</div>
              })}
            </div>
          </div>
        </div>
        <div className='content-host' >
          <div className='row host'>
            <div className='column name'>
              <span>{logement.host.name.split(" ")[0]}</span>
              <span>{logement.host.name.split(" ")[1]}</span>

            </div>
            <img alt='annonceur' src={logement.host.picture} />
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
            {logement.description}
          </p>
        </ItemAccordion>
        <ItemAccordion title={'Équipements'}>
          <ul>

            {logement.equipments.map((equipment,i) => {
              return (
                <li key={i}>{equipment}</li>
              )
            })}

          </ul>
        </ItemAccordion>
      </section>
    </div >
  )

}

export default AccommodationScreen;
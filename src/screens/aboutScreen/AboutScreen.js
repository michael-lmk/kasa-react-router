import React from 'react'
import './AboutScreen.css';
import ItemAccordion from '../../components/accordion/ItemAccordion'

const AboutScreen = () => {

    return (
        <div>
            <div className='img-container-about'>

            </div>
            <section className='accordion-content'>
                <ItemAccordion title={"Fiabilité"} width={"100%"}>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </ItemAccordion>
                <ItemAccordion title={"Respect"} width={"100%"}>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </ItemAccordion>
                <ItemAccordion title={"Service"} width={"100%"}>
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </ItemAccordion>
                <ItemAccordion title={"Sécurité"} width={"100%"}>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </ItemAccordion>
            </section>
        </div>
    )

}

export default AboutScreen
import React from 'react';

import '../assets/styles/Dates.scss';
import ProfilePicture from '../assets/images/profile.jpg';

const Dates = () => {
    return (
        <div className="dates">
            <div className="dates__container">
                <h1 className="dates__title">Información</h1>
                <div className="dates__image">
                    <img src={ProfilePicture} alt="Foto perfil"/>
                </div>
                <div className="dates__info">
                    <h2 className="dates__info-title">Diego Fernando Zapata López</h2>
                    <h3 className="dates__info-subtitle">Desarrollador Front-end y diseñador</h3>
                    <p className="dates__info-paragraph">Soy una persona diligente, con la capacidad de trabajar en equipo y seguir ordenes para obtener un mejor resultado, puntual, dispuesto a proponer ideas nuevas, a aprender nuevos conocimientos en mi entorno laboral y a aprovechar las oportunidades dadas.</p>
                    <div className="dates__data">
                        <div className="dates__item">
                            <p className="dates__item-text dates__item-text--email"><strong>E-mail:</strong> diegozalo57@gmail.com</p>
                        </div>
                        <div className="dates__item">
                            <p className="dates__item-text dates__item-text--phone"><strong>Teléfono:</strong> 301 796 6084</p>
                        </div>
                        <div className="dates__item">
                            <p className="dates__item-text dates__item-text--location"><strong>Ubicación:</strong> Medellín</p>
                        </div>
                        <div className="dates__item">
                            <p className="dates__item-text dates__item-text--date"><strong>Cumpleaños:</strong> 29/06/1995</p>
                        </div>
                        <div className="dates__item">
                            <p className="dates__item-text dates__item-text--experience"><strong>Experiencia:</strong> 4 años</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dates;
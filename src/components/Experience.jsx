import React from 'react';

import '../assets/styles/Experience.scss';
import workSpace from '../assets/images/work-space.svg';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
    return (
        <div className="experience">
            <div className="experience__container">
                <h2 className="experience__title">Experiencia</h2>
                <div className="experience__image">
                    <img src={workSpace} alt="" className="experience__img" />
                </div>
                <div className="experience__list">
                    <ExperienceItem year="2014 - 2016" company="Que impresión" position="Ayudante en centro de impresión y diseño" />
                    <ExperienceItem year="2017 - 2019" company="Latitude Digital" position="Desarrollador Front End y disañador" />
                    <ExperienceItem year="2019 - Actual" company="Roiback" position="Desarrollador Front End" />
                </div>
            </div>
        </div>
    )
}

export default Experience;
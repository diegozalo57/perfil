import React from 'react';

const ExperienceItem = ({ year, company, position }) => {
    return (
        <div className="experience__item">
            <p className="experience__duration">{year}</p>
            <div className="experience__place">
                <p className="experience__company">{company}</p>
                <p className="experience__position">{position}</p>
            </div>
        </div>
    )
}

export default ExperienceItem;
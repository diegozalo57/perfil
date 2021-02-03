import React from 'react';

const SkillsItem = ({ image, name }) => {
    return (
        <div className="skills__item">
            <img src={image} alt=""/>
    <p className="skills__name">{name}</p>
        </div>
    )
}

export default SkillsItem;
import React from 'react';

const ProjectsItem = ({ icon, link, name }) => {
    return (
        <div className="projects__item">
            <img src={icon} alt="" className="projects__icon" />
            <a href={link} className="projects__link" target="_blank">{name}</a>
        </div>
    )
}

export default ProjectsItem;
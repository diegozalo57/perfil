import React from 'react';

import ProjectsItem from './ProjectsItem';
import '../assets/styles/Projects.scss';
import IconProjects from '../assets/images/internet.svg';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__container">
                <h2 className="projects__title">Proyectos</h2>
                <div className="projects__list">
                    <ProjectsItem icon={IconProjects}
                        link=""
                        name="The Hotels" />
                    <ProjectsItem icon={IconProjects}
                        link="https://www.sonnet.es/"
                        name="Gran Hotel Son Net" />
                    <ProjectsItem icon={IconProjects}
                        link="https://www.coral-hotels.com/"
                        name="Coral Hotels" />
                    <ProjectsItem icon={IconProjects}
                        link="https://www.herrajesgaher.com/"
                        name="Herrajes Gaher" />
                    <ProjectsItem icon={IconProjects}
                        link="http://www.adneventos.com/site/"
                        name="ADN Eventos" />
                    <ProjectsItem icon={IconProjects}
                        link="https://www.aseragro.com/site/"
                        name="Aseragro" />
                    <ProjectsItem icon={IconProjects}
                        link="https://www.holasa.com.co/"
                        name="Holasa" />
                    <ProjectsItem icon={IconProjects}
                        link="https://cyansuites.com/sitio/"
                        name="Cyan Suites" />
                    <ProjectsItem icon={IconProjects}
                        link="https://todomascotas.com.co/"
                        name="Todo mascotas" />
                    <ProjectsItem icon={IconProjects}
                        link="https://www.agenciastm.com/site/"
                        name="Agencia STM" />
                </div>
            </div>
        </div>
    )
}

export default Projects;
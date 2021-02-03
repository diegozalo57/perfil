import React from 'react';
import '../assets/styles/Education.scss';
import EducationCollegeItem from './EducationCollegeItem';
import EducationCourseItem from './EducationCourseItem';

import CertificateIcon from '../assets/images/certificate.svg';

const Education = () => {
    return (
        <div className="education">
            <div className="education__container">
                <h2 className="education__title">Educación</h2>
                <div className="education__college">
                    <div className="education__college-list">
                        <EducationCollegeItem year="2013 - 2014" career="Diseño gráfico" name="Censa" />
                        <EducationCollegeItem year="2015 - 2017" career="Producción Multimedia" name="SENA" />
                    </div>
                </div>

                <div className="education__courses">
                    <div className="education__courses-list">
                        <EducationCourseItem icon={CertificateIcon} name={'Curso de Frontend Developer'} platform={"Platzi"} />
                        <EducationCourseItem icon={CertificateIcon} name={'Curso de React.js'} platform={"Platzi"} />
                        <EducationCourseItem icon={CertificateIcon} name={'Curso Práctico de React JS'} platform={"Platzi"} />
                        <EducationCourseItem icon={CertificateIcon} name={'Fundamentos de JavaScript'} platform={"Platzi"} />
                        <EducationCourseItem icon={CertificateIcon} name={'Curso de ECMAScript 6+'} platform={"Platzi"} />
                        <EducationCourseItem icon={CertificateIcon} name={'Curso de Asincronismo con JavaScript'} platform={"Platzi"} />
                        <EducationCourseItem icon={CertificateIcon} name={'Curso de Sass'} platform={"Platzi"} />
                        <EducationCourseItem icon={CertificateIcon} name={'Curso Profesional de Git y GitHub'} platform={"Platzi"} />
                        <EducationCourseItem icon={CertificateIcon} name={'Curso de Fundamentos de TypeScript'} platform={"Platzi"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
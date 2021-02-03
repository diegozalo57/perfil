import React from 'react';

const EducationCourseItem = ({ icon, name, platform }) => {
    return (
        <div className="education__courses-item">
            <img src={icon} alt="Certificado de curso" className="education__courses-icon" />
            <div className="education__courses-course">
                <p className="education__courses-name">{name}</p>
                <p className="education__courses-platform">{platform}</p>
            </div>
        </div>
    )
}

export default EducationCourseItem;
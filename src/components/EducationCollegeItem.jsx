import React from 'react';

const EducationCollegeItem = ({ year, career, name }) => {
    return (
        <div className="education__college-item">
            <p className="education__duration">{year}</p>
            <div className="education__college-place">
                <p className="education__career">{career}</p>
                <p className="education__name">{name}</p>
            </div>
        </div>
    )
}

export default EducationCollegeItem;
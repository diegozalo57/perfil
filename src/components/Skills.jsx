import React from 'react';
import SkillsItem from './SkillsItem';
import '../assets/styles/Skills.scss';

import htmlIcon from '../assets/images/html-icon.png';
import cssIcon from '../assets/images/css-icon.png';
import jsIcon from '../assets/images/js-icon.png';
import reactIcon from '../assets/images/react-icon.png';
import sassIcon from '../assets/images/sass-icon.png';
import gitIcon from '../assets/images/git-icon.png';
import jqueryIcon from '../assets/images/jquery-icon.png';
import bootstrapIcon from '../assets/images/bootstrap-icon.png';
import designIcon from '../assets/images/design-icon.png';
import tsIcon from '../assets/images/ts-icon.png';

const Skills = () =>
 {
     return (
         <div className="skills">
             <div className="skills__container">
                <h2 className="skills__title">Conocimientos</h2>
                <div className="skills__list">
                    <SkillsItem image={htmlIcon} name ={'HTML'} />
                    <SkillsItem image={cssIcon} name ={'CSS 3'} />
                    <SkillsItem image={jsIcon} name ={'JavaScript'} />
                    <SkillsItem image={reactIcon} name ={'React JS'} />
                    <SkillsItem image={sassIcon} name ={'SASS'} />
                    <SkillsItem image={gitIcon} name ={'Git'} />
                    <SkillsItem image={jqueryIcon} name ={'JQuery'} />
                    <SkillsItem image={bootstrapIcon} name ={'Bootstrap'} />
                    <SkillsItem image={designIcon} name ={'Diseño'} />
                    <SkillsItem image={tsIcon} name ={'TypeScript'} />
                </div>
             </div>
         </div>
     )
 }
export default Skills;
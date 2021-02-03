import React from 'react';
import Dates from '../components/Dates';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Paint from '../components/Paint';

const Home = () =>  {
    return (
        <React.Fragment>
            <Dates />
            <Skills />
            <Education />
            <Projects />
            <Experience />
            <Paint />
        </React.Fragment>
    )
}

export default Home;
import React from 'react';
import AboutMe from './aboutme.js';
import Education from './education.js';
import TechnicalSkills from './technicalskills.js';
import Projects from './projects.js';
import Achievements from './achievements.js';
import ContactMe from './contactme.js';

// Sub-component combining all the different page components together
function Home() {
  return (
    <div className='main'>
      <AboutMe />
      <Education />
      <TechnicalSkills />
      <Projects />
      <Achievements />
      <ContactMe />
    </div>
  );
}

export default Home;
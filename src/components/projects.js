import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

// Component displaying the Collapse component with Panel on the Projects page
function Projects() {
  return(
    <div id="projects" className="block projectsBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Projects</h2>
          <p>Have a sneak peak into the projects I have worked on using various technologies :)</p>
        </div>
        {/* Using Ant Design's Collapse component with Panel */}
        <Collapse>
          <Panel header="F.R.I.DA.Y. - A Virtual Desktop Voice Assistant" key="1">
            <p>Developed a GUI based Virtual Desktop Voice Assistant application to make daily tasks on your desktop easier
            by reducing human efforts, using voice control. Multiple tasks such as sending emails, playing music, opening
            applications, google searches, etc., can be performed by recognizing voice commands.
            <br />
            <br />Technology Used: Python
            <br />GitHub link: <a href="https://github.com/shefali289/F.R.I.D.A.Y.">https://github.com/shefali289/F.R.I.D.A.Y.</a></p>
          </Panel>
          <Panel header="Weatherology" key="2">
            <p>Created a website that allows you to search for current weather information by city name, display 5-day
            weather forecast for various cities, and also get the UV (Ultraviolet) Index and AQI (Air Quality Index) values
            by searching the coordinates.
            <br />
            <br />Technology Used: HTML, CSS, JavaScript, Bootstrap, AJAX and JQuery
            <br />GitHub link: <a href="https://github.com/shefali289/assessment-project">https://github.com/shefali289/assessment-project</a></p>          
          </Panel>
          <Panel header="Resume Website" key="3">
            <p>Designed a website specifically designed to display the resume in the form of a website. The website contains
            information such as About Me, Education, Skills both Technical and Interpersonal, Languages, Projects,
            Certificates and Contact information.
            <br />
            <br />Technology Used: HTML, CSS and JavaScript
            <br />GitHub link: <a href="https://github.com/shefali289/shefali289.github.io">https://github.com/shefali289/shefali289.github.io</a></p>                 
          </Panel>
          <Panel header="TravelBuddy - Bus Ticket System using Arduino and RFID Card Reader?" key="4">
            <p>A real time project useful for commuters which reduces the problem of the current paper-based bus ticket
            system, by implementing RFID Card System. RFID Reader will scan the card with a particular Card UID, which
            is unique to every card. The card on scanning will have the following functions: A. Recharge, B. Pay ticket
            price, C. Balance, D. Empty Card, which will be executed by pressing the keys on the keypad.
            <br />
            <br />Technology Used: : Arduino Software (IDE) using C/C++ dialect
            <br />GitHub link: <a href=" https://github.com/shefali289/Bus-Ticket-System"> https://github.com/shefali289/Bus-Ticket-System</a></p>                 
          </Panel>
        </Collapse>
      </div>
    </div>  
  );
}

export default Projects;
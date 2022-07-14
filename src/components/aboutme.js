import React from 'react';
import { Carousel } from 'antd';

// Data to be shown in Carousel
const items = [
  {
    key: '1',
    title: 'Hey! I am Shefali Sharma.',
    content: 'I am a learning enthusiast and a determined developer who is looking for a job opportunity in a competitive environment that will challenge me to expand my knowledge in the field of Computer Science!',
  },
  {
    key: '2',
    title: 'More about me!',
    content: 'I just moved back to New Zealand last year after spending 10 years in India to complete my secondary and tertiary education. I completed my under-graduate Bachelors degree in Computer Science and Engineering last year from India and worked as an Associate Software Engineer at a software company for a year. I am looking forward to do my post-graduate Masters degree in Information and Technology this year from the University of Auckland!',
  },
  {
    key: '3',
    title: 'Hobbies :)',
    content: 'In my free time I love to cook and bake! I have always been fascinated with how creative food can be! I really like trying out new dishes and mix and match different recipes to create something new!',
  },
]

// Component displaying the Carousel component on the About Me page
function AboutMe() {
  return (
    <div id="aboutMe" className="block aboutMeBlock">
      {/* Using Ant Design's Carousel component */}
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3 style={{color: 'white'}}>{item.title}</h3>
                <p style={{color: 'white'}}>{item.content}</p>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AboutMe;
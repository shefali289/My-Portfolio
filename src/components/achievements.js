import React from 'react';
import { List, Card } from 'antd';

// Data to be shown in List of Cards
const achievements = [
{
    title: 'Certificates/Achievements',
    content: [
        {
            item1: 'Certificate of Internship with MAQ Software Hyderabad Private Limited',
            item2: 'Certificate of successful completion of Full Stack Development course by UpGrad',
            item3: 'Certificate of successful completion of AMCAT exam',
            item4: 'Certificate of Appreciation in HackUp Hackathon IEEE Day 2019 Event at Chitkara University',
            item5: 'Certificate of Participation in Novate 2019 for TravelBuddy-Bus Ticket System at Chitkara University',
            item6: 'Bagged 2nd Position in Symbiosis Between Science and Technology (SBST 18) Quiz Event'
        }
    ]
},
{
    title: 'Experience',
    content: [
        {
            item1: 'Associate Software Engineer (Internship)',
            item2: 'MAQ Software Hyderabad, India',
            item3: 'Worked with an agile team and evaluated the technical requirements of business.',
            item4: 'Transformed requirements into Power BI solutions that efficiently enabled reporting and analytic capabilities to support the business initiatives of the clients.',
            item5: 'Developed Power BI reports and dashboards involving multiple data sets and provided reviews and validation of existing dashboards and new solutions.',
            item6: 'Contributed to the testing and review of test cases to ensure all requirements are covered.'
        }
    ]
},
{
    title: 'Participations',
    content: [
        {
            item1: 'Certificate of Internship with MAQ Software Hyderabad Private Limited',
            item2: 'Certificate of successful completion of Full Stack Development course by UpGrad',
            item3: 'Certificate of successful completion of AMCAT exam',
            item4: 'Certificate of Appreciation in HackUp Hackathon IEEE Day 2019 Event at Chitkara University',
            item5: 'Certificate of Participation in Novate 2019 for TravelBuddy-Bus Ticket System at Chitkara University',
            item6: 'Bagged 2nd Position in Symbiosis Between Science and Technology (SBST 18) Quiz Event'
        }
    ]
  }
];

// Component displaying the List of Card components on the Experience/Achievements page
function Achievements() {
  return (
    <div id="achievements" className="block achievementsBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Experience, Achievements and Participations</h2>
          <p>Look into my previous experience, achievements/certifications and participations in various events!</p>
        </div>
         {/* Using Ant Design's List component */}
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={achievements}
          renderItem={item => (
            <List.Item>
              {/* Using Ant Design's Card component */}
              <Card hoverable title={item.title}>
                <ul>
                    <li>{item.content[0].item1}</li>
                    <li>{item.content[0].item2}</li>
                    <li>{item.content[0].item3}</li>
                    <li>{item.content[0].item4}</li>
                    <li>{item.content[0].item5}</li>
                    <li>{item.content[0].item6}</li>
                </ul>  
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default Achievements;
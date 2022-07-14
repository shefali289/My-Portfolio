import React from 'react';
import { Row, Col } from 'antd';

// Data to be shown in Grid
const items = [
  {
    key: '1',
    icon: <i className="fas fa-pencil-alt"></i>,
    title: '10th Standard',
    content: 'Completed my 10th Standard in 2015 from Pandit Mohan Lal SD Public School, India - CBSE Board with a CGPA of 10',
  },
  {
    key: '2',
    icon: <i className="fas fa-book-open"></i>,
    title: '12th Standard',
    content: 'Completed my 12th Standard in 2017 from KB DAV Senior Secondary School, India - CBSE Board with a Percentage of 92.6',
  },
  {
    key: '3',
    icon: <i className="fas fa-graduation-cap"></i>,
    title: 'Bachelor of Engineering in Computer Science',
    content: 'Completed my B.E. in Computer Science and Engineering in 2021 from Chitkara University, India with a CGPA of 9.63',
  },
]

// Component displaying the Grid component on the Education page
function Education() {
  return (
    <div id="education" className="block educationBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Education</h2>
          <p>Have a look at my previous educational milestones!</p>
        </div>
        {/* Using Ant Design's Row and Col components for Grid */}
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Education;
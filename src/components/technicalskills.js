import React from 'react';
import image1 from '../images/powerbi.png';
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

// Component displaying the Card component with Grid on the Technical Skills page
function TechnicalSkills() {
  return (
    <div id="techincalSkills" className="block technicalSkillsBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Technical Skills</h2>
          <p>I am familiar with the following set of computer languages and tools...</p>
        </div>
        {/* Using Ant Design's Row and Col components for Grid */}
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            {/* Using Ant Design's Card component */}
            <Card 
              hoverable
              cover={<i className="devicon-java-plain-wordmark colored" style={{fontSize: 230, marginLeft: 70, marginTop:20}}></i>}
            >
              <Meta title="Java"/>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card 
              hoverable
              cover={<i className="devicon-javascript-plain colored" style={{fontSize: 230, marginLeft: 70, marginTop:20}}></i>}
            >
              <Meta title="Javascript" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card style={{height: 315}}
              hoverable
              cover={<i className="devicon-html5-plain-wordmark colored" style={{fontSize: 175, marginTop:40, marginLeft: 10}}><i className="devicon-css3-plain-wordmark colored" style={{fontSize: 175, marginTop:40, marginLeft: 10}}></i></i>}
            >
              <Meta title="HTML/CSS" style={{marginTop: 30}}/>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card 
              hoverable
              cover={<i className="devicon-python-plain-wordmark colored" style={{fontSize: 230, marginLeft: 70, marginTop:20}}></i>}
            >
              <Meta title="Python Basics" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card 
              hoverable
              cover={<i className="devicon-cplusplus-plain-wordmark colored" style={{fontSize: 230, marginLeft: 70, marginTop:20}}></i>}
            >
              <Meta title="C++" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card 
              hoverable
              cover={<img alt="Power BI" src={image1} style={{height: 250}}/>}
            >
              <Meta title="Power BI" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TechnicalSkills;
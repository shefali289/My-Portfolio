import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Drawer, Button } from 'antd';

const {Link} = Anchor;

// Component displaying the Navigation bar in the Header of the website
function NavigationHeader() {
  // Set state of the Navigation bar
  const [visible, setVisible] = useState(false);

  // Set state to true when responsive to show navigation in the form of a drawer
  const showDrawer = () => {
    setVisible(true);
  };

    // Set state to false when not responsive or closed
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='container-fluid'>
        <div className='header'>
            <div className="logo">
                <a href="/">Shefali's Portfolio</a>
            </div>
            <div className="navHidden">
              {/* Using Ant Design's Anchor component for navigation */}
              <Anchor affix={false}>
                <Link href="#aboutMe" title="About Me" />
                <Link href="#education" title="Education" />
                <Link href="#techincalSkills" title="Technical Skills" />
                <Link href="#projects" title="Projects" />
                <Link href="#achievements" title="Experience/Achievements" />
                <Link href="#contactme" title="Contact Me" />
            </Anchor>
          </div>
          <div className="navVisible">
            {/* Using Ant Design's Button component */}
            <Button type="primary" onClick={showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
            {/* Using Ant Design's Drawer component for navigation when responsive */}
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Anchor>
                <Link href="#aboutMe" title="About Me" />
                <Link href="#education" title="Education" />
                <Link href="#techincalSkills" title="Technical Skills" />
                <Link href="#projects" title="Projects" />
                <Link href="#achievements" title="Experience/Achievements" />
                <Link href="#contactme" title="Contact Me" />
              </Anchor>
            </Drawer>
          </div>
        </div>
    </div>
  );
}

export default NavigationHeader;
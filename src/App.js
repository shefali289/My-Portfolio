import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import NavigationHeader from './components/header.js';
import { Layout } from 'antd';
import Home from './components/home.js';
import PageFooter from './components/footer';

const { Header, Content, Footer } = Layout;

// Main component combining all the different layout components together
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <NavigationHeader />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <PageFooter />
      </Footer>
    </Layout>
  );
}

export default App;

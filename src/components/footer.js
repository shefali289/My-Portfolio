import { BackTop } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';
import { GithubOutlined } from '@ant-design/icons';

// Component displaying the Footer of the website
function PageFooter() {
  return (
    <div id="footer" className="container-fluid">
      <div className="footer">
        <ul className="socials">
          {/* Using Ant Design's LinkedinOutlined icon from Icon component */}
          <li><a href="https://www.linkedin.com/in/shefali--sharma"><LinkedinOutlined /></a></li>
          {/* Using Ant Design's GithubOutlined icon from Icon component */}
          <li><a href="https://github.com/shefali289"><GithubOutlined /></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2022 Shefali</div>
        {/* Using Ant Design's BackTop component to go back to the top of the page */}
        <BackTop style={{marginRight: -80}}>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default PageFooter;
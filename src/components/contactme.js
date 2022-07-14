import React from 'react';
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

// Component displaying the Form and Button components on the Contact Me page
function ContactMe() {
  return (
    <div id="contactme" className="block contactmeBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Leave a message for me below...</p>
        </div>
        {/* Using Ant Design's Form component */}
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address"/>
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
             {/* Using Ant Design's Button component */}
            <Button type="primary" htmlType="submit" className="submitBtn" onClick={()=> console.log("Message Submitted!")}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default ContactMe;
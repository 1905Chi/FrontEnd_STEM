import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { MdAlternateEmail } from 'react-icons/md';
import './Login.css';

function Login() {
  const notify = (string) => toast(string); // Hàm hiển thị thông báo
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const onFinish = (values) => {
    const { Email, Password } = values; // Lấy giá trị từ ô input
    // Thực hiện kiểm tra đăng nhập tại đây
    if (Email === 'quocchi1905@gmail.com' && Password === '123456') {
      localStorage.setItem('token', 'yourtoken'); // Lưu token vào localStorage
      localStorage.setItem('login', true); // Lưu thông tin user vào localStorage
      // navigate('/');
      // Chuyển hướng về trang chủ
      window.location.href = '/';
    } else {
      notify('Tài khoản không tồn tại');
    }
  };

  const onFinishFailed = (errorInfo) => {
    notify('Đăng nhập thất bại');
  };

  return (
    <div className="body-login">
      <div className="login-container">
        <h2> Đăng nhập </h2>{' '}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="Email"
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
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>{' '}
          <Form.Item
            label="Password"
            name="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>{' '}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox> Remember me </Checkbox>{' '}
            </Form.Item>{' '}
            <a className="login-form-forgot" href="">
              Forgot password{' '}
            </a>{' '}
          </Form.Item>{' '}
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit{' '}
            </Button>{' '}
            Or <a href=""> register now! </a>{' '}
          </Form.Item>{' '}
          <ToastContainer />{' '}
        </Form>{' '}
      </div>{' '}
    </div>
  );
}

export default Login;

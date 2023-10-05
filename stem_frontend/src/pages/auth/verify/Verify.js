import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useParams } from 'react-router-dom';
import './Verify.css';
import { DatePicker, Select } from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;
export default function Verify() {
  const { uuid } = useParams();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log(uuid);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  return (
    <div className="body-verify">
      <Form
        name="normal_login"
        className="verify-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item>
          <h2> Xác thực tài khoản </h2>{' '}
        </Form.Item>{' '}
        <Form.Item
          name="firstname"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please input your firstname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>{' '}
        <Form.Item
          name="lastname"
          label="Last Name"
          rules={[
            {
              required: true,
              message: 'Please input your lastname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>{' '}
        <Form.Item name="date-picker" label="Day of birth" {...config}>
          <DatePicker />
        </Form.Item>{' '}
        <Form.Item
          name="phone"
          label="Your phone number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>{' '}
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
              whitespace: true,
            },
          ]}
        >
          <Select
            defaultValue="MAKE"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: 'MALE',
                label: 'MALE',
              },
              {
                value: 'FEMALE',
                label: 'FEMALE',
              },
              {
                value: 'OTHER',
                label: 'OTHER',
              },
              {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
              },
            ]}
          />{' '}
        </Form.Item>{' '}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Gửi{' '}
          </Button>{' '}
        </Form.Item>{' '}
      </Form>{' '}
    </div>
  );
}

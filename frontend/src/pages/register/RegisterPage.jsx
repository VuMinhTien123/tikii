import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, message, notification } from 'antd';
import './register.scss'
import { Link, useNavigate } from 'react-router-dom';
import { callRegister } from '../../services/api';



const RegisterPage = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const {fullName, email, password, phone} = values;
        setIsSubmit(true);
        const res = await callRegister(fullName, email, password, phone);
        setIsSubmit(false);
        if(res?.data?._id) {
          message.success('Đăng kí tài khoản thành công');
          navigate('/login');
        } else {
          Notification.error({
            message : "đã xảy ra lỗi",
            description:
                  res.message && Array.isArray(res.message) ? res.message[5] : res.message,
                duration: 5
          })
        }
  };
  
  return (
    <>
    <h3 className='title-register'>Đăng kí tài khoản</h3>
    <div>
      <Form
    name="basic"
    onFinish={onFinish}
    autoComplete="off"
    className='form-register'
  >
    <Form.Item
      label="Họ tên"
      name="fullName"
      labelCol={{span: 24}}
      rules={[{ required: true, message: 'Please input your fullname!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="email"
      name="email"
      labelCol={{span: 24}}
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="password"
      name="password"
      labelCol={{span: 24}}
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="phone"
      name="phone"
      labelCol={{span: 24}}
      rules={[{ required: true, message: 'Please input your phone!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item >
      <Button type="primary" htmlType="submit" className='btn-register' loading= {isSubmit}
      // onClick={handleRegister}
      >
        Register
      </Button>
      <span >Đã có tài khoản <Link to='/login'>Đăng nhập</Link></span>
    </Form.Item>
  </Form>
    </div>
    </>
  )
}

export default RegisterPage


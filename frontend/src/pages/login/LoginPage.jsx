import { Button, Checkbox, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { callLogin } from '../../services/api';
import {useDispatch} from 'react-redux'
import { doLoginAction } from '../../redux/account/accountSlice';

const LoginPage = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const onFinish  = async (values) => {
    const {username, password} = values;
    setIsSubmit(true);
    const res = await callLogin(username, password);
    if(res?.data) {
      localStorage.setItem('access_token', res.data.access_token);
      dispatch(doLoginAction(res.data.user))
      message.success('Đăng nhập thành công');
      navigate('/')
    } else {
      Notification.error({
        message: 'Đăng nhập thất bại',
        description:
           res.message && Array.isArray(res.message) ? res.message[5] : res.message,
      duration: 5
      })
    }
  }

  return (
    <div>
      <>
    <h3 style={{fontSize: '45px', textAlign: 'center'}}>Đăng nhập</h3>
    <div>
      <Form
    name="basic"
    onFinish={onFinish}
    autoComplete="off"
    className='form-register'
  >


    <Form.Item
      label="email"
      name="username"
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

    <Form.Item name="remember" valuePropName="checked" >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item >
      <Button type="primary" htmlType="submit" className='btn-register' loading= {isSubmit}
      // onClick={handleRegister}
      >
        Login
      </Button>
      <span >Chưa có tài khoản <Link to='/register'>Đăng kí</Link></span>
    </Form.Item>
  </Form>
    </div>
    </>
    </div>
  )
}

export default LoginPage

import React, { useState } from 'react'
import { Button, Checkbox, Divider, Form, Input, Modal, message, notification } from 'antd';
import { callCreateUser } from '../../services/api';

const ModalCreateUser = (props) => {

  const [isSubmit, setIsSubmit] = useState(false);

  const [form] = Form.useForm();

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };


  const onFinish = async (values) => {
    const {fullName, email, password , phone} = values;
    // setIsSubmit(true);
    const res = await callCreateUser(fullName, email, password , phone);
    if(res && res.data) {
      message.success('Tạo mới thành công!');
      form.resetFields();
      props.setIsModalOpen(false);

      await props.fetchUser()
    } else {
      notification.error({
        message: 'Đã có lỗi',
        description: res.message
      });
    }
    // isSubmit(false)
  };
  
  
  return (
    <div>
      <Modal 
      title = "Thêm mới người dùng"
       open={props.isModalOpen}
        onOk={() => {form.submit()}} 
        onCancel={handleCancel}
        okText = 'Tạo mới'
        cancelText = {'Hủy'}
        // confirmLoading = {isSubmit}
        >
   
      {/* <Divider /> */}

      <Form
      form={form}
    name="basic"
   style={{maxWidth: 600}}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
    labelCol={{span: 24}}
      label="Tên hiển thị"
      name="fullName"
      rules={[{ required: true, message: 'Vui lòng nhập tên đầy đủ fullName' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
    labelCol={{span: 24}}
      label="email"
      name="email"
      rules={[{ required: true, message: 'Vui lòng nhập tên đầy đủ email' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
    labelCol={{span: 24}}
      label="password"
      name="password"
      rules={[{ required: true, message: 'Vui lòng nhập tên đầy đủ password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
    labelCol={{span: 24}}
      label="phone"
      name="phone"
      rules={[{ required: true, message: 'Vui lòng nhập tên đầy đủ phone' }]}
    >
      <Input />
    </Form.Item>
  </Form>
  </Modal>
    </div>
  )
}

export default ModalCreateUser


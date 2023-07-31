
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Divider, Form, Input, Modal, message, notification } from 'antd';
import { callUpdateUser } from '../../services/api';

const UserModalUpdate = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { _id, fullName, phone} = values;
    setIsSubmit(true);
    const res = await callUpdateUser(_id, fullName, phone);
    if(res && res.data) {
      message.success('Cập nhật user thành công');
      props.setIsModalUpdateOpen(false);
      await props.fetchUser()
    } else {
      notification.error({
        message : 'Đã có lỗi',
        description: res.message
      })
    }
    setIsSubmit(false);
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    props.setIsModalUpdateOpen(false);
  }

  useEffect(() => {
    form.setFieldsValue(props.dataUpdate)
  }, [props.dataUpdate])


  return (
    <div>
      <Modal 
      title = "Cập nhật người dùng"
       open={props.isModalUpdateOpen}
        onOk={() => {form.submit()}} 
        onCancel={handleCancel}
        okText = 'Cập nhật'
        cancelText = {'Hủy'}
        confirmLoading = {isSubmit}
        >
   
      {/* <Divider /> */}

      <Form
      form={form}
    name="basic"
   style={{maxWidth: 600}}
    onFinish={onFinish}
    onFinishFailed = {onFinishFailed}
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
    hidden
    labelCol={{span: 24}}
      label="id"
      name="_id"
      rules={[{ required: true, message: 'Vui lòng nhập tên đầy đủ email' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
    labelCol={{span: 24}}
      label="email"
      name="email"
      rules={[{ required: true, message: 'Vui lòng nhập tên đầy đủ password!' }]}
    >
      <Input disabled />
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

export default UserModalUpdate

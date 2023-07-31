import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, theme } from 'antd';

const InputSearchBook = (props) => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();
    // const {setFilter} = props;

    const formStyle = {
        maxWidth: 'none',
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        padding: 24,
    };
    

    const onFinish = (values) => {
        let query = "";
        if(values.mainText) {
            query += `&mainText=/${values.mainText}/i`
        }
        if(values.author) {
            query += `&author=/${values.author}/i`
        }
        if(values.category) {
            query += `&category=/${values.category}/i`
        }
        if(query) {
            props.handleSearchBook(query);
        }
    };

    return (
        <Form form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
            <Row gutter={24}>
                <Col span={8}>
                    <Form.Item
                        labelCol={{ span: 24 }} //whole column
                        name={`mainText`}
                        label={`Tên sách`}
                    >
                        <Input placeholder="placeholder" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        labelCol={{ span: 24 }} //whole column
                        name={`author`}
                        label={`Tác giả`}
                    >
                        <Input placeholder="placeholder" />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        labelCol={{ span: 24 }} //whole column
                        name={`category`}
                        label={`Thể loại`}
                    >
                        <Input placeholder="placeholder" />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">
                        Tìm kiếm
                    </Button>
                    <Button
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                            form.resetFields();
                            props.setFilter("");
                        }}
                    >
                        3 in 1
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default InputSearchBook;
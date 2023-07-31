import React from 'react'
import { Drawer,Badge, Descriptions } from 'antd';
import moment from "moment";

const UserViewDetail = (props) => {


  const onClose = () => {
    props.setOpenViewDetail(false);
  };
  return (
    <div>
      <Drawer 
      title="xem chi tiết người dùng"
      size={props.size}
      onClose={onClose}
      open={props.openViewDetail}
       >
      <Descriptions column={2} bordered>
        
     <Descriptions.Item label="Id">
       {props.dataUserDetail._id}
        </Descriptions.Item>

        <Descriptions.Item label="Tên hiển thị">
    {props.dataUserDetail.fullName}
        </Descriptions.Item>

        <Descriptions.Item label="Email">
    {props.dataUserDetail.email}
        </Descriptions.Item>

    <Descriptions.Item label="Số Điện Thoại">
    {props.dataUserDetail.phone}
        </Descriptions.Item>

    <Descriptions.Item label="ROLE" span={3}>
    <Badge status="processing" text={`${props.dataUserDetail.role}`}>
              {/* {props.dataUserDetail.role} */}
            </Badge>
    </Descriptions.Item>
    
    <Descriptions.Item label="Created At">
            {moment(props.dataUserDetail.createdAt).format("DD/MM/YYYY")}
          </Descriptions.Item>

          <Descriptions.Item label="Update At">
            {moment(props.dataUserDetail.updatedAt).format("DD/MM/YYYY")}
          </Descriptions.Item>
  </Descriptions>
      </Drawer>
    </div>
  )
}

export default UserViewDetail

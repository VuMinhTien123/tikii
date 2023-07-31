import React, { useEffect, useState } from 'react'
import { Button, Col, Popconfirm, Popover, Row, Table, message, notification } from 'antd';
import { callDeleteUser, callFetchListUser } from '../../services/api';
import InputSearch from './inputSearch';
import UserViewDetail from './UserViewDetail';
import moment from 'moment';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import UserModalCreate from './UserModalCreate';
import ModalCreateUser from './UserModalCreate';
import UserModalUpdate from './UserModalUpdate';



const UserTable = (props) => {
    const [listUser, setListUser] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState("");
    const [sortQuery, setSortQuery] = useState("");

    const [dataUserDetail, setDataUserDetail] = useState([]);
    const [openViewDetail, setOpenViewDetail] = useState(false);
    const [size, setSize] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({
      _id: "",
      fullName: "",
      email: "",
      phone: ""
    });

    const handleBtnModalCreateUser = () => {
      setIsModalOpen(true);
    }
  

    useEffect(() => {
        fetchUser()
    }, [current, pageSize, filter, sortQuery]);

    const fetchUser = async () => {
      setIsLoading(true);
        let query = `current=${current}&pageSize=${pageSize}`;
        if(filter) {
          query += `&${filter}`
        }
        if(sortQuery) {
          query += `&${sortQuery}`
        }
        const res = await callFetchListUser(query)
        if(res && res.data) {
            setListUser(res.data.result)
            setTotal(res.data.meta.total)
        }
        setIsLoading(false)
    }

    const handleClickBtnUpdate = (_id, fullName, email, phone) => {
      setIsModalUpdateOpen(true);
     setDataUpdate({
      _id: _id,
      fullName: fullName,
      email: email,
      phone: phone
     })
    }

    const handleDeleteUser = async (id) => {
      const res = await callDeleteUser(id);
      console.log(res)
      if(res && res.data) {
        message.success('Xóa thành công User');
        fetchUser();
      } else {
        notification.error({
          message: 'Có lỗi xảy ra',
          description: res.message
        })
      }
    }
    
      const columns = [
        {
          title: 'Id',
          // dataIndex: '_id',
          render : (text, record, index) => {
            return (
              <a href='#' 
              onClick={() => {
                setDataUserDetail(record);
                setOpenViewDetail(true);
                setSize("large");
              }}
              >
                {record._id}
              </a>
            )
          }
        },
        {
          title: 'tên hiển thị',
          dataIndex: 'fullName',
          sorter: true
        },
        {
          title: 'email',
          dataIndex: 'email',
          sorter: true
        },
        {
          title: 'phone',
          dataIndex: 'phone',
          sorter: true
        },
        {
          title: "Ngày Cập Nhật",
          dataIndex: "createdAt",
          sorter: true,
          render: (createdAt) => {
            return <div>{moment(createdAt).format("DD/MM/YYYY hh:mm:ss")}</div>;
          },
        },
        {
          title: 'Action',
          render: (text, record, index) => {

            return (
                <> 
                      <Popconfirm 
                      placement="right"
                       title={'Xác nhận xóa User'} 
                       discription = {"Bạn có chắc muốn xóa user này ? "}
                       okText = 'Xác nhận'
                       cancelText = "Hủy"
                       onConfirm = {() =>handleDeleteUser(record._id)}
                       >
                    <button
                    style={{cursor: 'pointer', marginRight: '12px', minWidth: '60px'}}
                    >
                      Delete
                    </button>
                      </Popconfirm>   
                {/* <button  style={{cursor: 'pointer', marginRight: '12px', minWidth: '60px'}} > Delete </button> */}

                <button
                onClick={() =>handleClickBtnUpdate(
                  record._id,
                  record.fullName,
                  record.email,
                  record.phone
                ) }
                style={{cursor: 'pointer', minWidth: '60px'}}
                > 
                Edit
                 </button>
                 </>
               
            )
          }
        },
      ];

      const onChange = (pagination, filters, sorter, extra) => {
       
        if (pagination && pagination.current !== current) {
          setCurrent(pagination.current);
        }
        if (pagination && pagination.pageSize !== pageSize) {
          setPageSize(pagination.pageSize);
        }
        if (sorter && sorter.order === "ascend") {
          let q = `&sort=${sorter.field}`;
          setSortQuery(q);
        }
        if (sorter && sorter.order === undefined) {
          // let q = `&sort=${sorter.field}`;
          setSortQuery("");
        }
        if (sorter && sorter.order === "descend") {
          let q = `&sort=-${sorter.field}`;
          setSortQuery(q);
        }
        if (sorter && sorter.field === "createdAt") {
          if (sorter.order === "ascend") {
            let q = `&sort=createdAt`;
            setSortQuery(q);
          }
          if (sorter.order === "descend") {
            let q = `&sort=-createdAt`;
            setSortQuery(q);
          }
        }
      };

      const handleSearch = (query) => {
        setFilter(query);
        // fetchUser(query)
      }

      const renderHeader = () => {
        return (
          <>    
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>Table List Users</span>
            <span style={{display: 'flex', gap: 15}}>
              <Button
              icon = {<PlusOutlined />} 
              type='primary'
              onClick={handleBtnModalCreateUser}
              >
                Thêm mới
              </Button>

              {/* <Button type='ghost' onClick={() => {
                setFilter("")
                setSortQuery("")
              }}>
                <ReloadOutlined />
              </Button> */}
            </span>
          </div>
          </>
        )
      }

      
      
      
  return (
    <div>
      <div>
      <UserViewDetail
          size = {size}
            openViewDetail = {openViewDetail}
            setOpenViewDetail = {setOpenViewDetail}
            dataUserDetail = {dataUserDetail}
            setDataUserDetail = {setDataUserDetail}
             />
             </div>

       <div>
             <ModalCreateUser
             onFinish = {props.onFinish}
             isModalOpen = {isModalOpen}
             setIsModalOpen = {setIsModalOpen}
              />
      </div>
      <div>
        <UserModalUpdate
        fetchUser = {fetchUser}
        setDataUpdate={setDataUpdate}
        dataUpdate={dataUpdate}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        isModalUpdateOpen={isModalUpdateOpen}
         />
      </div>
      
      <Row gutter={[20, 20]}>
                <Col span={24}>
                    <InputSearch handleSearch = {handleSearch}
                    setFilter = {setFilter}
                     />
                </Col>
                <Col span={24}>
                <Table 
                title = {renderHeader}
                loading = {isLoading}
       columns={columns}
        dataSource={listUser}
         onChange={onChange}
         rowKey= '_id'
         pagination = {
            {
            current: current,
            pageSize: pageSize,
            total: total,
            showSizeChanger: true,
            pageSizeOptions: [2, 10, 20, 50, 100],
            showTotal: (total, range) => {
              return (
                <div>
                  {range[0]} - {range[1]} trên {total} rows
                </div>
              );
            },

            }
         }
          />;
                </Col>
            </Row>
            
             
            
     
    </div>
  )
}

export default UserTable

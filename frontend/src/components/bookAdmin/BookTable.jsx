import { Button, Col, Popconfirm, Row, Table, message, notification } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

import { callDeleteBook, callFetchAllBook } from '../../services/api';
import InputSearchBook from './inputSearchBook';
import BookViewDetail from './BookViewDetail';
import { PlusOutlined } from '@ant-design/icons';
import BookModalCreate from './BookModalCreate';
import BookModalUpdate from './BookModalUpdate';

const BookTable = (props) => {
    const [listTable, setListTable] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);

    const [filter, setFilter] = useState("");
    const [sortQuery, setSortQuery] = useState("sort=-updatedAt");

    const [dataBookDetail, setDataBookDetail] = useState([]);
    const [openViewDetail, setOpenViewDetail] = useState(false);
    const [size, setSize] = useState();

    const [isModalOpenBook, setIsModalOpenBook] = useState(false)

    const [modalOpenUpdateBook, setModalOpenUpdateBook] = useState(false);
    const [dataUpdateBook, setDataUpdateBook] = useState({
      _id: '',
      mainText: '',
      author: '',
      price: '',
      category: '',
      quantity: '',
      sold: '',
      thumbnail: '',
      slider: ''
    })
    
      useEffect(() => {
        fetchBook()
      }, [current, pageSize,filter, sortQuery])

      const fetchBook = async () => {
        let query = `current=${current}&pageSize=${pageSize}`;
        if(filter) {
          query += `&${filter}`
        }
        if(sortQuery) {
          query += `&${sortQuery}`
        }
        const res = await callFetchAllBook(query);
        if(res && res.data) {
            setListTable(res.data.result);
            setTotal(res.data.meta.total);
        }
      }

      const handleSearchBook = (query) => {
        setFilter(query);
        fetchBook(query)
    }

    const handleClickBtnBookUpdate = (_id, mainText, author, price, category, quantity, sold,thumbnail, slider) => {
      setModalOpenUpdateBook(true);
      setDataUpdateBook({
        _id: _id,
        mainText: mainText,
        author: author,
        price: price,
        category: category,
        quantity: quantity,
        sold: sold,
        thumbnail:thumbnail ,
        slider: slider
      })
    }

    const handleDeleteBook =async(id) => {
      const res = await callDeleteBook(id)
      console.log(res);
      if(res && res.data) {
        message.success('Đã xóa cuốn sách này !!!');
        fetchBook();
      } else {
        notification.error({
          message: 'Đã xảy ra lỗi',
          description: res.message
        })
      }
    }


      const columns = [
        {
          title: 'id',
          // dataIndex: '_id',
          render : (text, record, index) => {
            return (
              <a href='#' 
              onClick={() => {
                setDataBookDetail(record);
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
          title: 'Tên sách',
          dataIndex: 'mainText',
          sorter: true,
        },
        {
          title: 'Thể loại',
          dataIndex: 'category',
          sorter: true,
        },
        {
          title: 'Tác giả',
          dataIndex: 'author',
          sorter: true,
        },
        {
          title: 'Giá tiền',
          dataIndex: 'price',
          sorter: true,
        },
        {
          title: 'Ngày cập nhật',
          dataIndex: 'createdAt',
          sorter: true,
          render: (createdAt) => {
            return <div>{moment(createdAt).format("DD/MM/YYYY hh:mm:ss")}</div>;
          },
        },
        {
            title: 'Action',
            render: (text, record, index) => {
                return (
                    <div > 
                      <Popconfirm
                      placement="right"
                      title={'Xác nhận xóa User'} 
                      discription = {"Bạn có chắc muốn xóa user này ? "}
                      okText = 'Xác nhận'
                      cancelText = "Hủy"
                      onConfirm = {() =>handleDeleteBook(record._id)}
                      >

                        <button
                        style={{cursor: 'pointer', margin: '0 12px 12px 0', minWidth: '60px'}}
                        >
                          Delete
                        </button>
                        </Popconfirm>               
                    <button
                    onClick={() => handleClickBtnBookUpdate(
                      record._id,
                      record.mainText,
                      record.author,
                      record.price,
                      record.category,
                      record.quantity,
                      record.sold,
                      record.thumbnail,
                      record.slider
                    )}
                    style={{cursor: 'pointer', minWidth: '60px'}}
                    > 
                    Edit
                     </button>
                     </div>
                   
                )
              }
        }
      ];

      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
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

    const handleBtnModelCreateBook = () => {
      setIsModalOpenBook(true);
    }
    
    const renderHeaderBook = () => {
      return (
        <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>Table list Books</span>
        <span style={{display: 'flex', gap: 15}}>
          <Button
          icon = {<PlusOutlined />}
          type='primary'
          onClick={handleBtnModelCreateBook}
          >
            Add books
          </Button>
        </span>
      </div>
      </>
      )
    }
    
  return (
    <div>
      <Row gutter={[20, 20]}>
                <Col span={24}>
                    <InputSearchBook
                    handleSearchBook = {handleSearchBook}
                      setFilter = {setFilter}/>
                    
                </Col>
                <Col span={24}>
                    <Table
                    title = {renderHeaderBook}
                        className='def'
                        columns={columns}
                        dataSource={listTable}
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
                              );}, }}
                    />
                </Col>
            </Row>
            <BookViewDetail
            openViewDetail = {openViewDetail}
            setOpenViewDetail = {setOpenViewDetail}
            dataBookDetail = {dataBookDetail}
            setDataBookDetail = {setDataBookDetail}
             />

             <BookModalCreate
             onFinish = {props.onFinish}
             isModalOpenBook = {isModalOpenBook}
             setIsModalOpenBook = {setIsModalOpenBook}
              />
              <BookModalUpdate
              fetchBook = {fetchBook}
              setDataUpdateBook = {setDataUpdateBook}
              dataUpdateBook = {dataUpdateBook}
              modalOpenUpdateBook = {modalOpenUpdateBook}
              setModalOpenUpdateBook = {setModalOpenUpdateBook}
               />
    </div>
  )
}

export default BookTable

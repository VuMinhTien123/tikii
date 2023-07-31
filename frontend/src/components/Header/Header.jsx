import React, { useEffect, useState } from 'react'
import './Header.scss'
import {FaReact} from 'react-icons/fa'
import {VscSearchFuzzy} from 'react-icons/vsc'
import {AiOutlineCaretRight} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import { Avatar, Badge, Divider, Drawer, Dropdown, Form, Input, Popover, Space, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { callLogout } from '../../services/api'
import { doLogoutAction } from '../../redux/account/accountSlice'
import OrderViewDetail from '../order/OrderViewDetail'

const Header = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isAuthenticated = useSelector(state => state.account.isAuthenticated);
  const user = useSelector(state => state.account.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector(state => state.order.carts)


  const handleLogout = async() => {
    const res = await callLogout();
    console.log(res);
    if(res && res.data) {
      dispatch(doLogoutAction())
      message.success('Đăng xuất thành công');
      navigate('/')
    }
  }

  const contentPopover = () => {
    return(
      <div className='pop-cart-body'>
        <div className='pop-cart-content'>
          {carts?.map((book, index) => {
            return(
              <div className='book' key={`book-${index}`}>
                <img src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${book?.detail.thumbnail}`} />
                <div>
                <div> {book?.detail?.mainText} </div>
                <div className='price'> 
                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND"}).format(book?.detail?.price ?? 0)}
                 </div>
                   </div>
              </div>
            )
          })}

          <div className='pop-cart-footer'
          onClick={ () => navigate('/order') }
          >
            Xem giỏ hàng
          </div>
        </div>
      </div>
    )
  }

let items = [
    {
      label: <label onClick={() => navigate('/infor')} >Quản lý tài khoản</label>,
      key: 'account',
    },
    {
      label: <label
              style={{cursor:'pointer'}}
              onClick={() => handleLogout()}
      >Đăng xuất</label>,
      key: 'logout',
    },
  ]
  if (user?.role === 'ADMIN') {
    items.unshift({
      label: <Link to = '/admin'>Trang quản trị</Link>,
      key: 'admin',
    })
  }
  return (
    <>
    <div className='header-container'>
      <header className='page-header' style={{boxShadow: '15px 5px 5px #dddd'}}>
        <div className='page-header_top'>
        <div className='page-header_toggle' onClick={() => {setOpenDrawer(true)}}>
          OPEN
        </div>
        <div className='page-header_logo'>
          <span className='logo'>
            <FaReact className='rotate icon-react' onClick={() => navigate('/')} /> 
            <span onClick={() => navigate('/')} style={{fontSize: '20px', marginLeft: '12px'}}>Tiki Shop</span>
          <VscSearchFuzzy onClick={() => navigate('/')} className = "icon-search" />
          </span>
          <input 
          className='input-search'
          type='text'
          placeholder='Bạn tìm gì hôm nay...'
          />

        </div>
        </div>
      <nav className='page-header_bottom'>
        <ul id='navigation' className='navigation'>
          <li className='navigation_item'>
            <Popover
            className='popover-carts'
            placement='topRight'
            rootClassName='popover-carts'
            title = {"Thêm vào giỏ hàng"}
            content = {contentPopover}
            arrow = {true}
            >

            <Badge
            count = {carts?.length ?? 0}
            size={'small'}
            showZero
            >
              <FiShoppingCart className='icon-cart' />
            </Badge>
            </Popover>
          </li>
          <li className='navigation_item mobile'> <Divider type='vertical' /> </li>
          <li className='navigation_item mobile'>
            {
              !isAuthenticated ? 
              <>
              <span className='btn-header-form ' onClick={() => navigate('/login')}>Login</span>
              <span className='btn-header-form ml' onClick={() => navigate('/register')}>Register</span>
              </>
              :
              <Dropdown menu={{items}} trigger={['click']}>
                {/* <a onClick={(e) => e.preventDefault()}> */}
                  <Space>
                    Welcome {user?.fullName}
                    <AiOutlineCaretRight />
                  </Space>
                {/* </a> */}
              </Dropdown>
            }
          </li>
        </ul>
      </nav>
      </header>
    </div>
    <Drawer
    title = 'Menu chức năng'
    placement='left'
    onClose={() => setOpenDrawer(false)}
    open = {openDrawer}
    >
        <p onClick={() => navigate('/infor')} style={{cursor: 'pointer'}}>Quản lý tài khoản</p>
        <Divider />

        <p style={{cursor: 'pointer'}} onClick={() => navigate('/register')} >Đăng xuất</p>
        <Divider />
    </Drawer>
    </>
  )
}

export default Header

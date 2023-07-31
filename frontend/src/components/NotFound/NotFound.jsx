import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import './NotFound.scss'
const NotFound = () => {
    const handleNotFound = () => {
        
    }
  return (
    <div>
      <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Link to='/' className='NotFound'>Back Home</Link>}
  />
    </div>
  )
}

export default NotFound

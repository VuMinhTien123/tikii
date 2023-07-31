import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotPremitted = () => {
    const Navigate = useNavigate()
  return (
    <div>
      <Result
    status="401"
    title="401"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button onClick = {() => Navigate('/')} type="primary">Back Home</Button>}
  />
    </div>
  )
}

export default NotPremitted

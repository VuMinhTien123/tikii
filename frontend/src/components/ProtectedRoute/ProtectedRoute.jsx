import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NotPremitted from './NotPremitted';


const RoleBaseRoute = (props) => {
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  const user = useSelector(state => state.account.user);
  const userRole = user.role;

  if(isAdminRoute && userRole === 'ADMIN') {
    return (
      <> {props.children} </>
    )
  } else {
    return (<NotPremitted />)
  }
}

const ProtectedRoute = (props) => {
  const isAuthenticated = useSelector(state => state.account.isAuthenticated)
  return (
    <div>
      {isAuthenticated === true ? 
      <>
      <RoleBaseRoute>
        {props.children}
      </RoleBaseRoute>   
      </> :
      <Navigate to='/login' />
      }
     
    </div>
  )
}

export default ProtectedRoute

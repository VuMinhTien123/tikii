

import BookPage from './pages/book/BookPage';
import { Outlet } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import ContactPage from './pages/contact/Contact';
import RegisterPage from './pages/register/RegisterPage';
import { useEffect } from 'react';
import { callFetchAccount } from './services/api';
import { useDispatch, useSelector } from 'react-redux';
import { doGetAccountAction } from './redux/account/accountSlice';
import Loading from './components/Loading/Loading';
import NotFound from './components/NotFound/NotFound';
import AdminPage from './pages/admin/AdminPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import LayoutAdmin from './components/LayoutAdmin/LayoutAdmin';
import Footer from './components/footer/Footer';
import OrderPage from './pages/order/Order';
import UserTable from './components/userAdmin/UserTable';
import UserViewDetail from './components/userAdmin/UserViewDetail';
import BookTable from './components/bookAdmin/BookTable';
import './styles/styles.scss'
import OrderViewDetail from './components/order/OrderViewDetail';
import Infor from './pages/infor/Infor';


const Layout = () => {
  return (
    <div className='layout-app'>
     <Header />
     <Outlet />
     <Footer />
    </div>
  )
}

// const LayoutAdmin = () => {
//     const isAdminRoute = window.location.pathname.startsWith('/admin');
//     const user = useSelector(state => state.account.user);
//     const userRole = user.role;

//     return (
//       <div className='layout-app'>
//         {isAdminRoute && useRole === 'ADMIN' && <Header />}
      
//        <Outlet />
      
//        {isAdminRoute && useRole === 'ADMIN' && <Footer />}
//       </div>
//     )
// }

 


export default function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.account.isLoading)

  const getAccount = async () => {
    if(window.location.pathname === '/login'
     || window.location.pathname === '/register'
    ) return;
    const res = await callFetchAccount()
    if(res && res.data) {
      dispatch(doGetAccountAction(res.data))
    }
  }
  useEffect(() => {
    getAccount()
  }, [])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<NotFound />,
  
      children: [
        { index: true, element: <Home /> },
        {
          path: "order",
          element: <OrderViewDetail />,
        },
        {
          path: "book/:slug",
          element: <BookPage />,
        },
        {
          path: "infor",
          element: <Infor />,
        },
      ],
    },

    {
      path: "/admin",
      element: <LayoutAdmin />,
      errorElement:<NotFound />,
  
      children: [
        { index: true, element: <ProtectedRoute><AdminPage /></ProtectedRoute> },
        {
          path: "user",
          element: <UserTable />,
        },
        {
          path: "book",
          element: <BookTable />,
        },
        {
          path: "order",
          element: <OrderPage />,
        },
      ],
    },


    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    
  ]);
  return (
    <div>
      {isLoading === false 
      || window.location.pathname === '/login'
      || window.location.pathname === '/register'
        ? 
      <RouterProvider router={router} /> :
<Loading />
      }
     
      
    </div>
  )
}


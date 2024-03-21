import logo from './logo.svg';
import './App.css';
import { Sidebar } from './component/Sidebar';
import { Navbar } from './component/Navbar';
import { Dashboard } from './component/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { Login } from './component/Login';
import { Signup } from './component/Signup';
import { ServiceProviderDashboard } from './component/serviceprovider/ServiceProviderDashboard';
import { UserDashboard } from './component/user/UserDashboard';
import { AddService } from './component/serviceprovider/AddService';
import { UpdateService } from './component/serviceprovider/UpdateService';
import { ProtectedRoutes } from './hooks/ProtectedRoutes';
import { Error404 } from './component/Error404';
import { AllServices, BookService } from './component/user/BookService';
import MyBookings  from './component/user/MyBookings';
import { FetchDetails } from './component/user/FetchDetails';
import { MyServices } from './component/serviceprovider/MyServices';
import { Servicedetails } from './component/serviceprovider/Servicedetails';
import { ServiceList } from './component/serviceprovider/ServiceList';
import { Payement } from './component/Payment';
import { ServiceProviderRegister } from './component/serviceprovider/ServiceProviderRegister';
import { UserRegistration } from './component/user/UserRegistration';
import { Profile, ServiceProviderProfile } from './component/serviceprovider/Profile';
import { UserProfile } from './component/user/Profile';
import { BookServiceDetails, DetailBookService } from './component/user/BookServiceDetails';
import Graph from './component/serviceprovider/ServiceGraph';
import UserDetail from './component/user/UserDetail';
import UpdateUser from './component/user/UpdateUser';

function App() {
  const path = window.location.pathname
  return (
    <body className='g-sidenav-show bg-gray-200'>
      {path === "/" || path === "/login" || path==="/serviceprovider/registration" || path==="/user/registration"|| path === "/signup"?null:<Sidebar/>}
      
      <main className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
      {/* {path === "/" || path === "/login" || path === "/signup"?null:<Navbar/>} */}
        <div className="container-fluid py">
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route element={<ProtectedRoutes/>}>
            <Route path='/serviceprovider/registration' element={<ServiceProviderRegister/>}/>
            <Route path='/serviceprovider/dashboard' element={<ServiceProviderDashboard/>}/>
            <Route path='/serviceprovider/profile' element={<ServiceProviderProfile/>}/>
            <Route path='/serviceprovider/addservice' element={<AddService/>}/>
            <Route path='/serviceprovider/myservices' element={<MyServices/>}/>
            <Route path='/serviceprovider/servicelist' element={<ServiceList/>}/>
            <Route path='/serviceprovider/updateservice/:id' element={<UpdateService/>}/>
            <Route path='/serviceprovider/details/:id' element={<Servicedetails/>}/>
            <Route path='/serviceprovider/servicelist' element={<ServiceList/>}/>
            <Route path='/user/registration' element={<UserRegistration/>}/>
            <Route path='/user/profile' element={<UserProfile/>}/>
            <Route path='/user/bookservices' element={<BookService/>}/>
            <Route path='/user/dashboard' element={<UserDashboard/>}/>
            <Route path='/user/bookings' element={<MyBookings/>}/>
            <Route path='/user/bookservicedetials/:id' element={<BookServiceDetails/>}/>
            <Route path='/user/fetchdetails/:id' element={<FetchDetails/>}/>
            <Route path='/user/payment/:id' element={<Payement/>}/>
            <Route path='/service/graph' element={<Graph/>}/>
            <Route path='/user/deatil/:id' element={<UserDetail />}/>
            <Route path='/user/update/:id' element={<UpdateUser />}/>



            <Route path='/*' element={<Error404/>}/>
            </Route>
          </Routes>
        </div>
      </main>
    </body>
  );
}

export default App;

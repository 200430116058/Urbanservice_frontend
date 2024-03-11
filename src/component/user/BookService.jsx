import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BookServiceImage.css'
import { Servicedetails } from '../serviceprovider/Servicedetails';

export const BookService = () => {
  
    const navigate = useNavigate()
    const [services, setServices] = useState([])

    const FetchDetail =(id)=>{
        navigate(`/user/fetchservice/${id}`)
    }

  const displayService = async()=>{
    try{
        const res = await axios.get('http://localhost:4000/services/service')
            if(res.status === 200){
                console.log("Success")
                console.log(res.data.data)
                setServices(res.data.data)
           }else{
            console.log("error")
           } 

    }catch(error){
        toast.error('😣 Internal Error!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
  }
  
  
  
  
  useEffect(()=>{
    displayService()
  },[])
  
  
  
  
    return (
    // <div className='d-flex flex-wrap'>
    //         {
    //             services?.map((service)=>{
    //                 return<> 
    //                     <div className="card">
    //                         <img className="card-img-top" src={service?.imageURL} alt="Card image cap"/>
    //                         <div className="card-body">
    //                             <h3 className="card-title">{service?.serviceName}</h3>
    //                             <h5 className="card-title">Fees:{service?.fees}</h5>
    //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                             <Link to={`/user/fetchservice/${service._id}`} className="btn btn-primary">Book Now</Link>
    //                         </div>
    //                     </div>

                     
    //                 </>
    //             })
    //         }
    //     </div>

    <div
    className="container mt-5"
    style={{ marginLeft: `5%`, maxWidth: `80%` }}
  >
    <h1 className="mb-4">Book a Service</h1>
    <div className="row">
      {services.map((service) => (
        <div key={service._id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={service.imageURL}
              className="card-img-top"
              alt={`Card ${service._id}`}
            />
            <div className="card-body">
              <h5 className="card-title">{service?.serviceName}</h5>
              <p className="card-text">{service?.fees}</p>
              <button className="btn btn-primary">
                {/* <Link to={`/user/bookservicedetials/${service._id}`} style={{color:`white`}}>Book Now</Link> */}
                <Link to={`/user/fetchdetails/${service._id}`} style={{color:`white`}}>Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
        

  )
}

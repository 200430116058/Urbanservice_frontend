import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MyServices = () => {

    const [serviceProviders,setServiceProviders] = useState([])

    const id = localStorage.getItem("id")
     console.log("Local id" , id)
    const fetchMyService = async (data)=>{
        try{
            if(id!=null || id!=undefined){
                const res = await axios.get("http://localhost:4000/services/service/providerid/"+id)
                console.log( "data",res.data.data)
                setServiceProviders(res.data.data)
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

    const deleteService = async(id)=>{
        try{
            const res = await axios.delete("http://localhost:4000/services/service/"+id);
            if(res.status === 200){
                fetchMyService()
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
        if(id!=null || id!=undefined){
            console.log(id)
            fetchMyService();
            deleteService()
        }
    },[])

  return (
    <div className="col-md-12">
    <div className="card strpied-tabled-with-hover">
      <div className="card-header ">
        <h4 className="card-title">My Service</h4>
        <p className="card-category">Here is your added service</p>
      </div>
      <div className="card-body table-full-width table-responsive">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th style={{justifyContent: "center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                serviceProviders?.map((serviceprovider)=>{
                    return(
                        <tr>
                            <td>{serviceprovider?.serviceName}</td>
                            <td>{serviceprovider?.category?.name}</td>
                            <td>{serviceprovider?.subCategory?.name}</td>
                            <td>
                            <button className="btn btn-info" onClick={() => {}}>
                                <Link to={`/serviceprovider/details/${serviceprovider._id}`}>DETAILS</Link>
                            </button>
                            </td>
                            <td><button className="btn btn-success"><Link to={`/serviceprovider/updateservice/${serviceprovider._id}`}>Update</Link></button></td>
                            <td><button className="btn btn-danger" onClick={() => {deleteService(serviceprovider._id)}}>Delete</button></td>
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}


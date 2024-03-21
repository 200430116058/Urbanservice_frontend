import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetail() {

    const id = useParams().id
    const [detail , Setdetail] = useState([]);

    const UserData = async()=>{
         
        try{
            const res = await axios.get("http://localhost:4000/bookings/booking/",id )
            console.log(res.data.data)
        Setdetail(res.data.data)

        }catch(error){
            console.log("Detail not fetched")
        }
        
    }


    useEffect(()=>{
        UserData()
    },[])
  return (
    <div className="container mt-5">
    <div className="row">
      {detail.map((details) => (
        <div className="col-md-4 mb-4">
          <div className="card">
          

            <div className="card-body">
              <h5 className="card-title">{details?.service?.serviceName}</h5>
              <p className="card-text">{details?.serviceprovider?.name}</p>
              <p className="card-text">{details?.user?.name}</p>
              <p className="card-text">{details?.total}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

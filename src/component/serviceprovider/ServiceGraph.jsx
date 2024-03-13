import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
export default function Graph() {

    const [services , SetService] = useState([]);

    const data = services.map((service)=>({
      name: service.serviceName,
      uv: Number(service.fees),
      pv: 1000,
      amt:Number(service.fees)
      }))
     

    const Service_data = async()=>{
        const res = await axios.get("http://localhost:4000/services/service");
        SetService(res.data.data);
    }

    useEffect(()=>{
      Service_data()
    },[])

   
       
  return (
    
    <div className='flex flex-d mt-5  h-50 d-inline-block container justify-content-center '>
         <ResponsiveContainer width={400} height={300}>
        <BarChart width={20} height={100}  data={data}>
        <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    </ResponsiveContainer>
    </div>
   
  )
}

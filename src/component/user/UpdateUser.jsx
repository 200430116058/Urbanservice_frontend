import React, { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export default function UpdateUser() {
    
     const id = useParams().id;   
    const submitHandler = async(data)=>{
         const res = await axios.put("http://localhost:4000/users/user/"+id,data);
         if(res.status === 200){
            alert("Data updated");
         }
         else{
            alert("Data not updated");
         }
    }

    const {register , handleSubmit} = useForm({
        defaultValues:async()=>{
            const res =  await axios.get("http://localhost:4000/users/user/"+id);
            return{
                name:res.data.data.name,
                password:res.data.data. password,
                email:res.data.data.email,
                contact:res.data.data.contact              
            }
        }
    })
  return (
    <div>
        <form role="form" onSubmit={handleSubmit(submitHandler)}>
                  <label className="form-label">Name:</label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      {...register("name")}
                    />
                  </div>
                  <label className="form-label">Email:</label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="email"
                      className="form-control"
                      {...register("email")}
                    />
                  </div>
                  <label className="form-label">Password:</label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="password"
                      className="form-control"
                      {...register("password")}
                    />
                  </div>
                  <label className="form-label">Contact:</label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      {...register("contact")}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
    </div>
  )
}

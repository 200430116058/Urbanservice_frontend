import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const FetchDetails = () => {

    
    const id = useParams().id

    const [services,setService] = useState()

    const [Id , SetId] = useState()



    const cards = [
        {
            id:1,
            title:"Card 1",
            content:"This is the content of card1",
            imageURL:"https://via.placeholder.com/150"
        }
    ]


    const submitBooking = async()=>{
        const serviceProviderId = services?.serviceprovider?._id
        console.log("service provider...",services)
        const userId = localStorage.getItem('id')
        const id1 = id
        const fees = services.fees 

        const obejctToSubmit = {
            service:id1,
            serviceprovider:serviceProviderId,
            user:userId,
            total:fees
        }
        console.log("obj to sbmit",obejctToSubmit)
        try{
            const res = await axios.post("http://localhost:4000/bookings/booking",obejctToSubmit)
            console.log("Submited object..",obejctToSubmit)
            console.log(res.data.data)
            console.log(res.data.data._id)
            await SetId(res.data.data._id);
           
        }catch(error){
            console.log(error)
        }
    }

    

    const fetchData = async ()=>{
        // alert("ok")
        try{
            const res = await axios.get("http://localhost:4000/services/services/"+id)
            // console.log("serv...",res.data.data)
            const responseData = res.data.data
            // console.log("response data",responseData)
            setService(responseData);
          

           
        }catch(error){
            console.log("Error", error)
        }
    }

   
    useEffect(()=>{
        fetchData()
    },[])

    useEffect(() => {
        // Check if services is not undefined before calling submitBooking
        if (services) {
            submitBooking();
        }
    }, [services]);

  return (
    <div>
        <h2>Details</h2>
        

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">ServiceName:{services?.serviceName}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Type:{services?.type?.name}</h6>
                            <p class="card-text">Category: {services?.category?.name}</p>
                            <p class="card-text">SubCategory: {services?.subCategory?.name}</p>
                            <p class="card-text">Fees: {services?.fees}</p>
                            <p class="card-text">City: {services?.city}</p>
                            <p class="card-text">Area: {services?.area}</p>
                            <p class="card-text">State: {services?.state}</p>
                            <p class="card-text">ServiceProvider: {services?.serviceprovider?.name}</p>
                            <Link to={`/user/payment/${Id}`} onClick={()=>{submitBooking()}} className="btn btn-primary">Confirm Now</Link>
                        </div>
                    </div>
                
         
 
    </div>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Servicedetails = () => {

    const cards = [
        {
            id:1,
            title:"Card 1",
            content:"This is content of Card1",
            imageURL:"https://via.placeholder.com/150"
        }
    ]
    const id = useParams().id
    const [services,setservices] = useState([])


    useEffect(()=>{
        submitHandler()
    },[])



    const submitHandler = async()=>{
        try{
            const res = await axios.get("http://localhost:4000/services/service/"+id)
            console.log(res.data.data)
            setservices(res.data.data)
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className="container mt-5">
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={services.imageURL}
                className="card-img-top"
                alt={`Card ${services._id}`}
              />

              <div className="card-body">
                <h5 className="card-title">{services.serviceName}</h5>
                <p className="card-text">{services?.category?.name}</p>
                <p className="card-text">{services?.subCategory?.name}</p>
                <p className="card-text">{services?.type?.name}</p>
                <p className="card-text">{services?.fees}</p>
                <p className="card-text">{services?.area}</p>
                <p className="card-text">{services?.city}</p>
                <p className="card-text">{services?.state}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Payement = () => {
  const id = useParams().id;
 console.log("Update id", id);
 const [item , Setitem] = useState()


 const GetData = async()=>{
  const res = await axios.get("http://localhost:4000/bookings/booking/"+id);
  console.log(res.data.data.service.serviceName);
  Setitem(res.data.data);
 }
 
 useEffect(()=>{
  GetData();
},[]);

const SendMail = async () => {
  try {
    // Fetch data before sending email
    const res = await axios.get("http://localhost:4000/bookings/booking/" + id);
    const item = res.data.data;

    // Construct email content with dynamically fetched data
    const htmlTemplate = `
      <div>
        <h1>Contact Form Submission</h1>
        <p>Name: ${item.service.serviceName}</p>
        <p>Email: ${item.serviceprovider.name}</p>
        <p>Message: ${item.total}</p>
      </div>
    `;

    // Prepare email object
    const emailObject ={
      to: "yoganandimihir@gmail.com",
      subject: "Booking Confirmation",
      html: htmlTemplate,
    };

    // Send email
    const emailRes = await axios.post("http://localhost:4000/users/sendmail", emailObject);

    // Check response and show appropriate message
    if (emailRes.status === 200) {
      alert("Mail Sent");
    } else {
      alert("Mail Not Sent");
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert("Error occurred while sending email.");
  }
}


  
  return (
    <div className="container mt-5 px-5">
  <div className="mb-4">
    <h2>Confirm order and pay</h2>
    <span>
      please make the payment, after that you can enjoy all the features and
      benefits.
    </span>
  </div>
  <div className="row">
    <div className="col-md-8">
      <div className="card p-3">
        <h6 className="text-uppercase">Payment details</h6>
        <form>
        <div className="inputbox mt-3">
          {" "}
          <input
            type="text"
            name="name"
            placeholder='Name'
            className="form-control"
            required="required"
          />{" "}
          <span>Name on card</span>{" "}
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="inputbox mt-3 mr-2">
              {" "}
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder='Card Number'
                required="required"
              />{" "}
              <i className="fa fa-credit-card" /> <span>Card Number</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-row">
              <div className="inputbox mt-3 mr-2">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder='Expiry'
                  required="required"
                />{" "}
                <span>Expiry</span>{" "}
              </div>
              <div className="inputbox mt-3 mr-2">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder='cvv'
                  required="required"
                />{" "}
                <span>CVV</span>{" "}
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
      <div className="mt-4 mb-4 d-flex justify-content-between">
        <span>Previous step</span>
        <button className="btn btn-success px-3" onClick={SendMail}>Pay $840</button>
      </div>
    </div>
    {/* <div className="col-md-4">
      <div className="card card-blue p-3 text-white mb-3">
        <span>You have to pay</span>
        <div className="d-flex flex-row align-items-end mb-3">
          <h1 className="mb-0 yellow">$549</h1> <span>.99</span>
        </div>
        <span>
          Enjoy all the features and perk after you complete the payment
        </span>
        <a href="#" className="yellow decoration">
          Know all the features
        </a>
        <div className="hightlight">
          <span>100% Guaranteed support and update for the next 5 years.</span>
        </div>
      </div>
    </div> */}
  </div>
</div>

  )
}

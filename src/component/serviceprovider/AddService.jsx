import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './AddService.css'

export const AddService = () => {
  const {register, handleSubmit,reset} = useForm();
  const [categories, setcategories] = useState([])
  const [types,setType] = useState([]) 
  const [subCategories,setsubCategories] = useState([])
  const [serviceproviders,setServiceProvider] = useState([])

    const submitHandler = async(data) => {
        var formData = new FormData()
        formData.append("serviceName",data.serviceName)
        formData.append("category",data.category)
        formData.append("subCategory",data.subCategory)
        formData.append("type",data.type)
        formData.append("fees",data.fees)
        formData.append("area",data.area)
        formData.append("city",data.city)
        formData.append("state",data.state)
        formData.append("serviceprovider",data.serviceprovider)
        formData.append("myFile",data.myFile[0])
        try{
            const res = await axios.post("http://localhost:4000/services/services",formData)
            if(res.status === 201){
                toast.success('😃 Service Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            }
    }catch(e){
      //       toast.error('😣 Internal Error!', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
        console.log(data);
    }

  const loadCategories = async() => {

      const res = await axios.get('http://localhost:4000/categories/category');
      console.log(res.data.data);
      setcategories(res.data.data);

  }

  const loadTypes = async()=>{
    const res = await axios.get('http://localhost:4000/types/type')
    console.log(res.data.data)
    setType(res.data.data)
  }

    const loadSubCategory = async () => {
    const res = await axios.get("http://localhost:4000/subcategories/subcategory")
    console.log(res.data)
    setsubCategories(res.data.data)
  }
    const loadserviceprovider = async () => {
    const res = await axios.get("http://localhost:4000/serviceproviders/provider") 
    console.log(res.data)
    setServiceProvider(res.data.data)
  }
  useEffect(() => {
    
    loadCategories();
    loadTypes()
    loadSubCategory()
    loadserviceprovider()
    
  }, [])

return (
    // <div>
    //       <ToastContainer
    //     position="top-right"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="light"
    // />
    // <div className="container">
    //   <div className="row justify-content-center">
    //     <div className="col-md-10">
    //       <div className="card">
    //         <div className="card-body">
    //           <h1>Add Service</h1>
    //           <form onSubmit={handleSubmit(submitHandler)}>
    //             <div className="mb-3">
    //               <label htmlFor="serviceName" className="form-label">Service Name:</label>
    //               <input type="text" className="form-control" {...register('serviceName')} />
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="category" className="form-label">Category:</label>
    //               <select className="form-select" {...register('category')}>
    //                 <option>Select Category</option>
    //                 {
    //                     categories?.map((category)=>{
    //                         return<>
    //                             <option value={category._id}>{category.name}</option>
    //                         </>
    //                     })
    //                 }
    //               </select>
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="subCategory" className="form-label">SubCategory:</label>
    //               <select className="form-select" {...register('subCategory')}>
    //                 <option>Select Subcategory</option>
    //                 {
    //                     subCategories?.map((subCategory)=>{
    //                         return <>
    //                             <option value={subCategory._id}>{subCategory.name}</option>
    //                         </>
    //                     })
    //                 }
    //               </select>
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="type" className="form-label">Type:</label>
    //               <select className="form-select" {...register('type')}>
    //                 <option>Select Type</option>
    //                 {
    //                     types?.map((type)=>{
    //                         return<>
    //                             <option value={type._id}>{type.name}</option>
    //                         </>
    //                     })
    //                 }                
    //               </select>
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="fees" className="form-label">Fees:</label>
    //               <input type="text" className="form-control" {...register('fees')} />
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="area" className="form-label">Area:</label>
    //               <input type="text" className="form-control" {...register('area')} />
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="city" className="form-label">City:</label>
    //               <input type="text" className="form-control" {...register('city')} />
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="state" className="form-label">State:</label>
    //               <input type="text" className="form-control" {...register('state')} />
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="serviceprovider" className="form-label">Service Provider:</label>
    //               <select className="form-select" {...register('serviceprovider')}>
    //                 <option>Select Service Provider</option>
    //                 {
    //                     serviceproviders.map((serviceprovider)=>{
    //                         return<>
    //                             <option value={serviceprovider._id}>{serviceprovider.name}</option>
    //                         </>
    //                     })
    //                 }
    //               </select>
    //             </div>
    //             <div className="mb-3">
    //               <button type="submit" className="btn btn-primary">Submit</button>
    //             </div>
    //             {/* <div className="mb-3">
    //               <button type="reset" className="btn btn-danger">Reset</button>
    //             </div> */}
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
    <div>
        
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
/>
    {/* <div className="card card-plain" >
    <div className="card-header">
      <h4 className="font-weight-bolder text-center">Add service</h4>
    </div>
    <div className="card-body">
      <form role="form" onSubmit={handleSubmit(submitHandler)}>
        <label className="form-label">Service Name</label>
        <div className="input-group input-group-outline mb-3">
          <input
            placeholder="Enter Your Service Name"
            className="form-control"
            type="text"
            {...register("serviceName")}
          />
        </div>
        <label className="form-label">Category</label>
        <div className="input-group input-group-outline mb-3">
          <select className="form-control" {...register("category")}>
            <option>SELECT CATEGORY</option>
            {categories?.map((category) => {
              return (
                <>
                  <option value={category._id}>{category.name}</option>
                </>
              );
            })}
          </select>
        </div>
        <label className="form-label">Subcategory</label>
        <div className="input-group input-group-outline mb-3">
          <select className="form-control" {...register("subCategory")}>
            <option>SELECT SUBCATEGORY</option>
            {subCategories?.map((subcategory) => {
              return (
                <>
                  <option value={subcategory._id}>{subcategory.name}</option>
                </>
              );
            })}
          </select>
        </div>
        <label className="form-label">Type</label>
        <div className="input-group input-group-outline mb-3">
          <select className="form-control" {...register("type")}>
            <option>SELECT TYPE</option>
            {types?.map((type) => {
              return (
                <>
                  <option value={type._id}>{type.name}</option>
                </>
              );
            })}
          </select>
        </div>
        <label className="form-label">Fees</label>
        <div className="input-group input-group-outline mb-3">
          <input
            placeholder="Enter Your Fees"
            className="form-control"
            type="text"
            {...register("fees")}
          />
        </div>
        <label className="form-label">Area</label>
        <div className="input-group input-group-outline mb-3">
          <input
            placeholder="Enter Your Area"
            className="form-control"
            type="text"
            {...register("area")}
          />
        </div>
        <label className="form-label">City</label>
        <div className="input-group input-group-outline mb-3">
          <input
            placeholder="Enter Your City"
            className="form-control"
            type="text"
            {...register("city")}
          />
        </div>
        <label className="form-label">State</label>
        <div className="input-group input-group-outline mb-3">
          <input
            placeholder="Enter Your State"
            className="form-control"
            type="text"
            {...register("state")}
          />
        </div>
        <div className="text-center" style={{ width: 100, marginLeft: 250 }}>
          <input type="submit" value="submit" className="btn btn-success" />
          <input type="reset" value="reset" className="btn btn-danger" />
        </div>
      </form>
    </div>
  </div> */}
  {/* <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
          <label htmlFor="category">Select Category</label>
          <select className="form-control" {...register('category')}>
          {categories?.map((category) => {
              return (
                <>
                  <option value={category._id}>{category.name}</option>
                </>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subCategory">Select Subcategory</label>
          <select className="form-control" {...register('subCategory')}>
          {subCategories?.map((subcategory) => {
              return (
                <>
                  <option value={subcategory._id}>{subcategory.name}</option>
                </>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Select Type</label>
          <select className="form-control" {...register('type')}>
          {types?.map((type) => {
              return (
                <>
                  <option value={type._id}>{type.name}</option>
                </>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="input1">ServiceName:</label>
          <input type="text" className="form-control" {...register('serviceName')} />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Fees</label>
          <input type="text" className="form-control" {...register('fees')} />
        </div>
        <div className="form-group">
          <label htmlFor="input3">City</label>
          <input type="text" className="form-control" {...register('city')} />
        </div>
        <div className="form-group">
          <label htmlFor="input4">Area</label>
          <input type="text" className="form-control" {...register('area')} />
        </div>
        <div className="form-group">
          <label htmlFor="input5">State</label>
          <input type="text" className="form-control" {...register('state')} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</div> */}

<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card border-primary">
        <div className="card-header bg-primary "> 
          <h4 className="mb-0 text-white">Add Service</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
              <label htmlFor="input1">Service Name:</label>
              <input type="text" className="form-control form-control-lg border" {...register('serviceName')} required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <select className="form-control form-control-lg custom-select border" {...register('category')} required>
                <option value="">Select a Category</option>
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subCategory">Select Subcategory</label>
              <select className="form-control form-control-lg custom-select border" {...register('subCategory')} required>
                <option value="">Select a Subcategory</option>
                {subCategories?.map((subcategory) => (
                  <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="type">Select Type</label>
              <select className="form-control form-control-lg custom-select border" {...register('type')} required>
                <option value="">Select a Type</option>
                {types?.map((type) => (
                  <option key={type._id} value={type._id}>{type.name}</option>
                ))}
              </select>
            </div>
           
            <div className="form-group">
              <label htmlFor="input2">Fees</label>
              <input type="text" className="form-control form-control-lg border" {...register('fees')} required />
            </div>
            <div className="form-group">
              <label htmlFor="input4">Area</label>
              <input type="text" className="form-control form-control-lg border" {...register('area')} required />
            </div>
            <div className="form-group">
              <label htmlFor="input3">City</label>
              <input type="text" className="form-control form-control-lg border" {...register('city')} required />
            </div>
            
            <div className="form-group mb-3">
              <label htmlFor="input5">State</label>
              <input type="text" className="form-control form-control-lg border" {...register('state')} required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <select className="form-control form-control-lg custom-select border" {...register('serviceprovider')} required>
                <option value="">Select a serviceprovider</option>
                {serviceproviders?.map((sp) => (
                  <option key={sp._id} value={sp._id}>{sp.name}</option>
                ))}
              </select>
            </div>
             <div className="form-group mb-3">
              <label htmlFor="input5">Image</label>
              <input type="file" className="form-control form-control-lg border" {...register('myFile')} required />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  </div>
  );
};


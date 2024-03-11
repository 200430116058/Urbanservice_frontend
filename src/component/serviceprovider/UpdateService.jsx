import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateService = () => {

    const id = useParams().id
    const navigate = useNavigate()
    const [categories, setcategories] = useState([])
    const [types,setType] = useState([]) 
    const [subCategories,setsubCategories] = useState([])
    
  
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
    
    useEffect(() => {
      
      loadCategories();
      loadTypes()
      loadSubCategory()

      
    }, [])

    const {register,handleSubmit} = useForm({
        defaultValues: async () => {
            const res = await axios.get("http://localhost:4000/services/service/"+id)
            return{
                serviceName:res.data.data.serviceName,
                fees:res.data.data.fees,
                area:res.data.data.area,
                city:res.data.data.city,
                state:res.data.data.state,
            }
        }
    })



    const submitHandler =  async(data)=>{
        try{
            const res = await axios.put('http://localhost:4000/services/service/'+id,data)
            if(res.status === 200){
                toast.success('😃 Service Updated!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    // navigate('/serviceprovider/servicelist')
                    window.location.pathname = ('/serviceprovider/servicelist')
            }
        }catch(e){
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
  

    return (
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg bg-gray-200" style={{ marginLeft: `10px` }}>
      <div className="page-header align-items-start min-vh-100 " >
          <span className="mask  opacity-6 " />
          <div className="container my-auto">
              <div className="row">
                  <div className="col-lg-4 col-md-8 col-12 mx-auto">
                      <div className="card z-index-0 fadeIn3 fadeInBottom">
                          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                              <div className="bg-gradient-primary shadow-primary border-radius-lg py-1 pe-1" style={{ marginTop: `0px` }}>
                                  <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">
                                      Update Services
                                  </h5>
                              </div>
                          </div>
                          <div className="card-body" style={{ padding: `12px` }}>
                              <form role="form" className="text-start" onSubmit={handleSubmit(submitHandler)}>
                                  <label className="form-label" style={{ margin: `1px` }}>Service Name</label>
                                  <div className="input-group input-group-outline my-0" >
                                      <input type="text" className="form-control" {...register("serviceName")} />
                                  </div>
                                  <label className="form-label" style={{ margin: `1px` }}>Category</label>
                                  <div className="input-group input-group-outline my-0">
                                      <select className="form-control" {...register("category")}>
                                          <option>Select Category</option>
                                          {categories?.map((category) => {
                                              return (
                                                  <>
                                                      <option value={category._id}>{category.name}</option>
                                                  </>
                                              );
                                          })}
                                      </select>
                                  </div>
                                  <label className="form-label" style={{ margin: `1px` }}>Subcategory</label>
                                  <div className="input-group input-group-outline my-0">
                                      <select className="form-control" {...register("subCategory")}>
                                          <option>Select Subcategory</option>
                                          {subCategories?.map((subcategory) => {
                                              return (
                                                  <>
                                                      <option value={subcategory._id}>{subcategory.name}</option>
                                                  </>
                                              );
                                          })}
                                      </select>
                                  </div>
                                  <label className="form-label" style={{ margin: `1px` }}>Type</label>
                                  <div className="input-group input-group-outline my-0">
                                      <select className="form-control" {...register("type")}>
                                          <option>Select Type</option>
                                          {types?.map((type) => {
                                              return (
                                                  <>
                                                      <option value={type._id}>{type.name}</option>
                                                  </>
                                              );
                                          })}
                                      </select>
                                  </div>

                                  <label className="form-label" style={{ margin: `1px` }}>Fees</label>
                                  <div className="input-group input-group-outline mb-0">
                                      <input type="text" className="form-control" {...register("fees")} />
                                  </div>
                                  <label className="form-label" style={{ margin: `1px` }}>Area</label>
                                  <div className="input-group input-group-outline mb-0">
                                      <input type="text" className="form-control" {...register("area")} />
                                  </div>
                                  <label className="form-label" style={{ margin: `1px` }}>City</label>
                                  <div className="input-group input-group-outline mb-0">
                                      <input type="text" className="form-control" {...register("city")} />
                                  </div>
                                  <label className="form-label" style={{ margin: `1px` }}>State</label>
                                  <div className="input-group input-group-outline mb-0">
                                      <input type="text" className="form-control" {...register("state")} />
                                  </div>
                                  <div className="text-center">
                                      <button
                                          type="submit"
                                          className="btn bg-gradient-primary w-100 my-4 mb-2"
                                      >
                                          Update Service
                                      </button>
                                  </div>

                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
      );
    };

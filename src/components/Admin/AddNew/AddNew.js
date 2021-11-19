import React from 'react';
import { useForm } from "react-hook-form";

// import { Link } from 'react-router-dom';

const AddNew = () => {

    

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data, e) => {
      fetch("https://safe-cove-57794.herokuapp.com/addNew", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then(result => console.log(result))
        e.preventDefault()
        alert("successfull")
        reset()
    };

    return (
        <div>
            <h1 className="text-Success text-center mt-4">Add New Products</h1>
            
            <div className="container rounded mt-5 mb-5 ">
    <div className="row">
        <div className="col-md-6 body">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                        <a href="./../Home"><h6>Back to home</h6></a>
                    </div>
                    
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" mt-2">
                    <div className="">
                        <h6 className="">Sunglass Name</h6>
                        <input
                        {...register("name", { required: true })} 
                        type="text" className="form-control" placeholder="Sunglass Name" />
                        {errors.name && <p className="text-danger">This field is required</p>}
                    </div>
                    <div className="">
                    <h6 className="mt-2">Place Details</h6>
                        <input 
                        {...register("description")} 
                        type="text" className="form-control" placeholder="Write about This Sunglass!" />
                    </div>
                    <div className="">
                    <h6 className="mt-2">Category</h6>
                        <input  
                        {...register("category")} 
                        type="text" className="form-control" defaultValue={''} />
                    </div>
                    <div className="">
                    <h6 className="mt-2">Sunglass Image</h6>
                        <input type="text" {...register("img", { required: true })} className="form-control" placeholder="Image URL"/>
                        {errors.img && <p className="text-danger">This field is required</p>}
                        </div>
                    <div className="">
                    <h6 className="mt-2">Price</h6>
                        <input type="number" {...register("price", { required: true })} className="form-control" placeholder="Price"/>
                        {errors.price && <p className="text-danger">This field is required</p>}
                        </div>
                        <input className="mt-2 text-right btn btn-primary profile-button" type="submit" placeholder="Add New Place" />
                </div>
                </form>
            </div>
        </div>
            <div className="col-md-6">
                <img style={{borderRadius: 10}} width="80%" src="https://cdn-yotpo-images-production.yotpo.com/instagram/29/17857484269514629/standard_resolution.jpg" alt="" />
            </div>
    </div>
</div>
        </div>
    );
};

export default AddNew;
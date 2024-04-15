import axios from 'axios';
import React, { useState } from 'react'
import Http from '../Http';
import { useNavigate } from 'react-router-dom';

export default function CreateUsers() {
    
    const navigate=useNavigate();
    const [errors, setErrors] = useState({});
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });

const handleChange=(e)=>{
const value=e.target.value;
const name=e.target.name;
setFormData((prev)=>{
    return(
        {
           ...prev,
           [name]:value
        }
    )
})
}

    const handleSubmit=(e)=>{
    e.preventDefault();
   Http.post("/create",formData).then((res)=>{
navigate("/");
   }).catch((error) => {
        setErrors(error.response.data.errors);
    
});
   
    }
  return (
    <div className='container'>
        <h1>registration form</h1>

        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={formData.name} onChange={handleChange} className='form-control mt-3' placeholder='Name' />
            {/* {errors.name ? <span style={{ color: 'red' }}>{errors.name}</span>}<br /> */}
            {errors.name ? <span style={{ color: 'red' }}>{errors.name}</span> : null}
            <input type='text' name='email' value={formData.email} onChange={handleChange} className='form-control mt-3' placeholder='Email' />
            {errors.email ? <span style={{ color: 'red' }}>{errors.email}</span> : null}<br />


            <input type='text' name='password' value={formData.password} onChange={handleChange} className='form-control mt-3' placeholder='password' />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}<br />

            <button type='submit' className='btn btn-primary form-control mt-3'>Create</button>
        </form>
    </div>
  )
}

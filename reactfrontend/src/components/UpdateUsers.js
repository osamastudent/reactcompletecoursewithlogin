import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Http from '../Http';
import { useNavigate,useParams } from 'react-router-dom';

export default function UpdateUsers() {
    const navigate=useNavigate();
    const {id}=useParams();
 
    const [formData,setFormData]=useState({});


    useEffect(()=>{
        fetchUser();
    },[]);

    const fetchUser=()=>{
        Http.get(`/updateUsers/${id}`).then((response)=>{
setFormData({
    name:response.data.name,
    email:response.data.email,
})
        })
    }


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

    const handleUpdate=(e)=>{
    e.preventDefault();
    Http.put(`/updateUsersStore/${id}`,formData).then((response)=>{
navigate("/");
   }).catch((error)=>{
    console.log(error);
   });
   
    }
  return (
    <div className='container mt-5'>
        <h1>Updation form {id}</h1>
here:{formData.name}
here:{formData.email}
        <form onSubmit={handleUpdate}>
            <input type='text' name='name' value={formData.name} onChange={handleChange} className='form-control mt-3' placeholder='Name' />
            <input type='text' name='email' value={formData.email} onChange={handleChange} className='form-control mt-3' placeholder='Email' />
            <button type='submit' className='btn btn-primary form-control mt-3'>Update</button>
        </form>
    </div>
  )
}

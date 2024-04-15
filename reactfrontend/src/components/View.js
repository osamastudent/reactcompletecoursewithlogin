import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Http from '../Http';

export default function View() {
    const [formData,setFormData]=useState({});

useEffect(()=>{
    viewUser();
},[]);

    const viewUser=()=>{
        Http.get(`/userView/${id}`).then((response)=>{
setFormData({
    name:response.data.name,
    email:response.data.email,
})
        })
    }
    const {id}=useParams();


  return (
    <div className='container mt-5'>
        <h1>View</h1>
<h1>{id}</h1>
<h1>{formData.name}</h1>
<h1>{formData.email}</h1>
<h1>{formData.password}</h1>
<h1>{formData.created_at}</h1>
    </div>
  )
}

import React from 'react'
import {useState} from 'react'
import { addStudentmore } from './CounterSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function AddStudent() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // const [errors, setErrors] = useState({});
const    [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
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
        console.log(e)
        dispatch(addStudentmore(formData));
        // Clear the form after submitting
        setFormData({
            name: "",
            email: "",
            password: "",
        });
navigate("/read")
    
};
  return (
    <div className='container'>
    <h1>registration form</h1>

    <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={formData.name} onChange={handleChange} className='form-control mt-3' placeholder='name' />
        
        <input type='text' name='email' value={formData.email} onChange={handleChange} className='form-control mt-3' placeholder='email' />
        <input type='text' name='password' value={formData.password} onChange={handleChange} className='form-control mt-3' placeholder='password' />
        

        
        <button type='submit' className='btn btn-primary form-control mt-3'>Create</button>
    </form>
</div>
  )
}

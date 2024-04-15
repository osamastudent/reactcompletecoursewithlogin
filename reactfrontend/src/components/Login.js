import React, { useState } from 'react'
import Http from '../Http';
import {useNavigate} from 'react-router-dom';
export default function Login() {
    const navigate=useNavigate();
    const [loginData,setLoginData]=useState({
        email:'',
        password:''
    });
    const [errors,setErrors]=useState({});

    const handlechange=(e)=>{
const name=e.target.name;
const value=e.target.value;

setLoginData((prev)=>{
return({
    ...prev,
[name]:value
});
});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Http.post("/login", loginData)
            .then((response) => {
                localStorage.setItem('email',loginData.email);
                navigate("/");
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    const responseData = error.response.data;
    
    
                    // Extract Laravel validation errors
                    const laravelErrors = responseData.errors || {};
    
                    setErrors({
                        email: laravelErrors.email || '', // Set email error from Laravel validation
                        password: laravelErrors.password || '', // Set password error from Laravel validation
                        errormessage: responseData.errormessage || '', // Set custom error message
                        erroremailmessage: responseData.erroremailmessage || '' // Set custom email error message
                    });
                }
            });
    }
    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await Http.post("/login", loginData);
    //         alert("Login successful");
    //     } catch (error) {
    //         if (error.response && error.response.data) {
    //             const { errors, errormessage, erroremailmessage } = error.response.data;
    //             setErrors({
    //                 email: errors ? errors.email : '',
    //                 password: errors ? errors.password : '',
    //                 errormessage: errormessage || '',
    //                 erroremailmessage: erroremailmessage || ''
    //             });
    //         }
    //     }
    // }
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     Http.post("/login", loginData)
    //         .then((response) => alert("Login successful"))
    //         .catch((error) => {
    //             const { errors, errormessage, erroremailmessage } = error.response?.data || {};
    //             setErrors({
    //                 email: errors?.email || '',
    //                 password: errors?.password || '',
    //                 errormessage: errormessage || '',
    //                 erroremailmessage: erroremailmessage || ''
    //             });
    //         });
    // }
    

    return (
        <div className='container mt-5'>

            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='email' onChange={handlechange} value={loginData.email} className='form-control mt-3' placeholder='Email' />
             {errors.email ? <span>{errors.email}</span> : null}
             {errors.erroremailmessage ? <span>{errors.erroremailmessage}</span> : null}
                <input type='text' name='password' onChange={handlechange} value={loginData.password} className='form-control mt-3' placeholder='password' />
             {errors.password ? <span>{errors.password}</span> : null}
             {errors.errormessage ? <span>{errors.errormessage}</span> : null}
                
                <button type='submit' className='btn btn-primary form-control mt-3'>Create</button>
            </form>

        </div>

    )
}

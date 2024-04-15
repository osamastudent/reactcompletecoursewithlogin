import { useFormik } from 'formik'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FormSchema } from './FormSchema';
import Http from '../Http';

export default function FormikForm() {
    const navigate=useNavigate();
    const formInitialValues={
        name:'',
        email:'',
        password:'',
    }

    const {handleChange,values,errors,handleBlur,touched,handleSubmit}=useFormik({
initialValues:formInitialValues,
validationSchema:FormSchema,
onSubmit:(values,action)=>{
Http.post("/create",{
name:values.name,
email:values.email,
password:values.password,
}).then((response)=>{
    navigate("/");
})
}
    });


  return (
    <div className='container mt-5'>
        
        <h1>Formik Form</h1>

        <form onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={handleChange} onBlur={handleBlur}  value={values.name} className='form-control mt-3' placeholder='Name' /> <br></br>
             {/* <span>{errors.name}</span> */}
             {errors.name && touched.name ? <span style={{color:"red"}}>{errors.name}</span> : null}
            <input type='text' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} className='form-control mt-3' placeholder='Email' /><br></br>
        
            {errors.email && touched.email ? <span style={{color:"red"}}>{errors.email}</span> : null}




            <input type='text' name='password' onChange={handleChange} value={values.password} className='form-control mt-3' placeholder='password' /><br></br>
            {errors.password && touched.password ? <span style={{color:"red"}}>{errors.password}</span> : null}


            <button type='submit' className='btn btn-primary form-control mt-3'>Create</button>
        </form>
    </div>
    
  )
}

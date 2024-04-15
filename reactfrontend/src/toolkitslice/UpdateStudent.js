
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addStudentmore, clearStudent, getStudent, updateStudentRecord } from './CounterSlice'; // import updateStudentRecord

export default function UpdateStudent() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    
    
    const dispatch = useDispatch();   
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getStudent(id));
        return () => {
            dispatch(clearStudent());
        };
    }, []);

    
    // Update form data when studentData changes

    const studentData = useSelector((state) => state.counter.student);

    useEffect(() => {
        if (studentData) {
            setFormData({
                name: studentData.name || '',
                email: studentData.email || '',
                password: studentData.password || '',
            });
        }
    }, [studentData]);


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prev) => {
            return (
                {
                    ...prev,
                    [name]: value
                }
            )
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        dispatch(updateStudentRecord({
            id: studentData.id,
            name: formData.name,
            email: formData.email,
            password: formData.password
        }));
        
        // Clear the form after submitting
        setFormData({
            title: "",
            body: "",
        });
        
        navigate("/read");

    };
    return (
        <div className='container mt-5' >
            <h1>Updation form</h1>

            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={formData.name} onChange={handleChange} className='form-control mt-3' placeholder='name' />

                <input type='text' name='email' value={formData.email} onChange={handleChange} className='form-control mt-3' placeholder='email' />
                <input type='text' name='password' value={formData.password} onChange={handleChange} className='form-control mt-3' placeholder='password' />



                <button type='submit' className='btn btn-primary form-control mt-3'>Update</button>
            </form>
        </div>
    )
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDataStart, addDataSuccess, addDataFailure } from './CounterSlice';
import axios from 'axios';

const NewCreateUser = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddData = async (e) => {
    e.preventDefault();
    dispatch(addDataStart());
    try {
      const response = await axios.post('/http://localhost:8000/api/createUsers', formData);
      dispatch(addDataSuccess(response.data));
      // Optionally, you can reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    } catch (error) {
      dispatch(addDataFailure(error.message));
    }
  };

  return (
    <div className='container'>
      <h1>Registration Form</h1>
      <form onSubmit={handleAddData}>
        <input type='text' name='name' value={formData.name} onChange={handleChange} className='form-control mt-3' placeholder='Name' />
        <input type='text' name='email' value={formData.email} onChange={handleChange} className='form-control mt-3' placeholder='Email' />
        <input type='text' name='password' value={formData.password} onChange={handleChange} className='form-control mt-3' placeholder='Password' />
        <button type='submit' className='btn btn-primary form-control mt-3'>Create</button>
      </form>
    </div>
  );
};

export default NewCreateUser;

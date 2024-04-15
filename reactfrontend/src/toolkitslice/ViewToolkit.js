import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getStudent,clearStudent } from './CounterSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function ViewToolkit() {
  const { id } = useParams();
  const dispatch=useDispatch();
  const [viewData, setViewData] = useState({});
const data=useSelector((state)=>state.counter.student);

  useEffect(() => {
  dispatch(getStudent(id));
  return ()=>{
    dispatch(clearStudent());
  };
  }, []);
  
  return (
    <div className='container mt-5'>
      <h1>{id}</h1>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>{data.password}</h1>
      {/* <h1>{viewData.title}</h1> */}

    </div>
  )
}

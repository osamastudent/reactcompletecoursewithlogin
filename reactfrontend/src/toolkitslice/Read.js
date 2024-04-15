import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteStudent } from './CounterSlice';
export default function Read() {
    const studentsData=useSelector((state)=>state.counter.students);
    console.log(studentsData)
const dispatch=useDispatch();



    const handleDelete = (id) =>{
dispatch(deleteStudent(id));
    }

    
   


  return (
    <div className='container'>
        <h1>ReduxToolkit</h1>
        <table className='table mt-5'>
<thead>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>password</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
{studentsData.map((data,index)=>{
    return(

    <tr key={index}>
        <td>{index+1}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.password}</td>
        <td><button onClick={()=>handleDelete(data.id)} className='btn btn-danger'>Delete</button>
        <Link to={`/ViewToolkit/${data.id}`} className='btn btn-primary mx-2'>View</Link>
        <Link to={`/UpdateStudent/${data.id}`} className='btn btn-warning '>Update</Link></td>
    </tr>

    );
})}

</tbody>
</table>
    </div>
  )
}

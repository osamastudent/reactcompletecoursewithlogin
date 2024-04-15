import axios from 'axios';
import { useEffect, useState } from 'react'; import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Http from '../Http';

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  console.log(data);

  const getData = () => {
    axios.get("http://localhost:8000/api/show").then((response) => {
      setData(response.data);
    })
  }


  useEffect(() => {
    getData();

  }, []);


  // delete user
  const handleDelete = (id) => {
    Http.delete(`/userDelete/${id}`).then((response) => {
      getData();
    });
  }
  return (
    <div className="container">
      <h1>react with laravel</h1>
      <button onClick={() => navigate("/FormikForm")}>Create</button>
      <table className='table'>
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
    {data.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.password}</td>
          <td>
            <Link to={`/UpdateUsers/${data.id}`} className='btn btn-warning'>Edit</Link>
            <Link to={`/view/${data.id}`} className='btn btn-warning'>View</Link>
            <button type='button' onClick={() => {
              if (window.confirm("Do you want to delete?")) {
                handleDelete(data.id);
              }
            }} className='mx-1 btn btn-danger'> Delete</button>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>


    </div>
  );

}

export default Home;

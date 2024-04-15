import Axios  from "axios";
import React from "react";

export default  Axios.create({
baseURL:"http://127.0.0.1:8000/api",
Headers:{
    "Content-type":"application/json"
}

});
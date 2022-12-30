# npm i axios
# npm i react-router-dom
# npm install @mui/material @emotion/react @emotion/stylednpm 
# i react-toastify
# npm i react-icons

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const url = "http://localhost:5000/api/products";

const Home = () => {
  const [data, setData] = useState([]);
 
 
  const fetchdata = async () => {
    const responce = await fetch(url);
    const data = await responce.json();
    setData(data);
    console.log(data)
  
  };
  useEffect(() => {
    fetchdata();
  }, []);
 
  return (
    <>
         <div className="container">
       <div className="row">
         <div className="col-md-12">
           <h3 className="display-6">I will die Here one day     </h3>
           {data.map((pass) => {
             const { id,image,name,} = pass;
             return (
               <>
                 <div key={id} className="item">
                   <article>
                     <img src={image} />
                     <p>{pass.name}</p>

 
                 
                   </article>
                 </div>
               </>
             );
           })}
         </div>
       </div>
     </div>
    </>
  );
};

export default Home;

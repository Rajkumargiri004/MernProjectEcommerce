import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const responce = await axios("http://localhost:5000/api/products");
      const data = await responce.data;
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="display-6">I will die Here one day </h3>
            {data.map((item) => {
              const { id, image, name, description, rating, price } = item;
              return (
                <>
                  <div key={id} className="item">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      <div className="col">
                        <div className="card">
                          <img src={image} className="card-img-top" alt=""/>
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                              This is a longer card with supporting text below
                              as a natural lead-in to additional content. This
                              content is a little bit longer.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <img src={image}className="card-img-top" alt=""/>
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                              This is a longer card with supporting text below
                              as a natural lead-in to additional content. This
                              content is a little bit longer.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <img src={image}className="card-img-top" alt=""/>
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                              This is a longer card with supporting text below
                              as a natural lead-in to additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <img src={image}className="card-img-top" alt=""/>
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                              This is a longer card with supporting text below
                              as a natural lead-in to additional content. This
                              content is a little bit longer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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


import React, { useEffect } from "react";
import Loading from "./Loading";

import { useState  } from "react";

const url = "https://course-api.com/react-tours-project";
const Practice = () => {
  const [data, setData] = useState([]);
  const [readmore, setReadmore] = useState(false);
  const [loading ,setLoading] = useState(true)

  console.log(useState)
  const fetchdata = async () => {
    setLoading(true)
    const responce = await fetch(url);
    const data = await responce.json();
    setData(data);
    setLoading(false)

  };
  useEffect(() => {
    fetchdata();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="display-6"> My Trip  </h3>
            {data.map((pass) => {
              const { id, image, info, name } = pass;
              return (
                <>
                  <div key={id} className="item">
                    <article>
                      <img src={image} />

                      <p >
                        {readmore ? info : `${info.substring(0, 200)}...`}
                        <button onClick={() => setReadmore(!readmore)}>
                          {readmore ? "Show Less" : "  Read More"}
                        </button>
                      </p>
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

export default Practice;

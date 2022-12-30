import React from "react";

const Section = ({ tata }) => {
  return (
    <>
      <section>
      
      
        {tata.map((item) => {
          const { url } = item;
          return <></>;
        })}
      </section>
    </>
  );
};

export default Section;

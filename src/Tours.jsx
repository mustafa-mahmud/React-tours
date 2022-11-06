import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTours }) => {
  console.log(tours);

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>

      <div>
        {tours.map((tour) => {
          return <Tour removeTours={removeTours} {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

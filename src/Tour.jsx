import React, { useState } from 'react';

const Tour = ({ id, name, image, info, price, removeTours }) => {
  const [fullShow, setFullShow] = useState(false);

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {fullShow ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setFullShow(!fullShow)}>
            {fullShow ? 'show less' : 'show more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

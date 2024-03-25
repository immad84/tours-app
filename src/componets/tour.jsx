import { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 100)} .....  `}
          <button type="button" className="btn info-btn">
            Read More
          </button>
        </p>
      </div>
      <button
        className="btn btn-block delete-btn"
        onClick={() => removeTour(id)}
      >
        not interested
      </button>
    </article>
  );
};
export default Tour;

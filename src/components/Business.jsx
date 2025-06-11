import React from "react";
import '/src/App.css'
import pizzaImage from '/src/assets/pizza.png';


function Business({data}) {
  return (
    <div className="business-card">
  <img className="business-image" src={data.image} alt={data.name} />

  <div className="business-info">
    <h2 className="business-name">{data.name}</h2>
    <p className="business-address">
      {data.address}<br />
      {data.city}, {data.state} {data.zipcode}
    </p>

    <div className="business-footer">
      <div className="category">{data.category}</div>
      <div className="meta">
        <div className="rating">{data.rating} stars</div>
        <div className="reviews">{data.reviewCount} reviews</div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Business;



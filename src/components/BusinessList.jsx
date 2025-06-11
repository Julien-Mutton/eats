import React from "react";
import '/src/App.css';
import Business from "./Business";
import pizzaImage from "../assets/pizza.png";

const mock = {
  name: "Pixa",
  image: pizzaImage,
  address: "123 Main St",
  city: "Jabotica",
  state: "SP",
  zipcode: "00000-000",
  category: "Pizza",
  reviewCount: 45,
  rating: 4.5
};


const businesses = [mock,mock,mock];

function BusinessList(){
    return (
         
    <div className="card-row">
      {businesses.map((b, i) => (
        <Business key={i} data={b} />
      ))}
    </div>
  );

    
};

export default BusinessList
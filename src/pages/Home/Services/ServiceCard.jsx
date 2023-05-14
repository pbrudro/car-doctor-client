import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id,title,img,price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-red-500 font-bold">Price: {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`} className="btn btn-primary">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

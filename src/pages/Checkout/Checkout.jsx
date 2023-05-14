import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price,img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService =(e)=> {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const due = form.due.value;
    const booking = {
      customerName : name,
      email,
      img,
      date,
      service:title,
      service_id:_id,
      price:due
    }
    console.log(booking);
    fetch('http://localhost:5000/bookings',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(booking)
    })
    .then(res=> res.json())
    .then(data=>{
      if (data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Order Confirmed Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
      console.log(data)
    })


  }
  return (
    <div>
      <h2 className="text-center text-3xl">Book Service: {title}</h2>

      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              name="due"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

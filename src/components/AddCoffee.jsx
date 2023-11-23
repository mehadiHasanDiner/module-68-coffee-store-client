import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      details,
      category,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleAddCoffee}>
        <div className="form-control bg-[#e7e6de] md:p-20 p-2 m-16">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            Add a Coffee
          </h2>
          <div className="join mb-5">
            <div className="btn join-item rounded-r-full"> Coffee Name</div>
            <input
              className="input input-bordered join-item w-full"
              name="name"
              placeholder="Coffee name"
            />
          </div>
          <div className="join mb-5">
            <div className="btn join-item rounded-r-full">
              Available Quantity
            </div>
            <input
              className="input input-bordered join-item w-full"
              name="quantity"
              placeholder="Available Quantity"
            />
          </div>
          <div className="join mb-5">
            <div className="btn join-item rounded-r-full">Coffee Supplier</div>
            <input
              className="input input-bordered join-item w-full"
              name="supplier"
              placeholder="Supplier Name"
            />
          </div>
          <div className="join mb-5">
            <div className="btn join-item rounded-r-full">Taste of Coffee</div>
            <input
              className="input input-bordered join-item w-full"
              name="taste"
              placeholder="Taste"
            />
          </div>
          <div className="join mb-5">
            <div className="btn join-item rounded-r-full">Category</div>
            <input
              className="input input-bordered join-item w-full"
              name="category"
              placeholder="Category"
            />
          </div>
          <div className="join mb-5">
            <div className="btn join-item rounded-r-full">Details</div>
            <input
              className="input input-bordered join-item w-full"
              name="details"
              placeholder="Details"
            />
          </div>
          <div className="join mb-5">
            <div className="btn join-item rounded-r-full">Photo URL</div>
            <input
              className="input input-bordered join-item w-full"
              type="url"
              name="photo"
              placeholder="Details"
            />
          </div>

          <input
            type="submit"
            value="Add a Coffee"
            className="btn btn-block bg-[#D2B48C] hover:bg-yellow-600 hover:text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;

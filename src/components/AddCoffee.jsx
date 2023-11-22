import React from "react";

const AddCoffee = () => {
  return (
    <div>
      <div className="form-control">
        <label className="labe">
          <span className="label-text"> Your Email</span>
        </label>
        <label className="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@ite.com"
            className="input input-bordered"
          />
        </label>
      </div>
    </div>
  );
};

export default AddCoffee;

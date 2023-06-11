import React from 'react';

const AddClass = () => {
    return (
        <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col ">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Add Class" />
          
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default AddClass;
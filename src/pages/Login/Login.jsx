import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

const handleLogin =  event =>{
  event.preventDefault();
  form = event.target;
  const email = form.email.value;
  const password = form.password.value;
console.log(email, password)
}

    return (
        <div className="hero min-h-screen bg-white text-black ">
  <div className="hero-content flex-col   rounded">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Please Login</h1>
      
    </div>
    <div className="card  w-full max-w-lg shadow-2xl bg-base-100 ">
      <form onSubmit={handleLogin} className="card-body bg-orange-300  rounded">
        <div className="form-control">
          <label className="label ">
            <span className="label-text font-semibold text-black">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-black">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input  input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary text-orange-700" type="submit" value="login" />
        </div>
        <div>
          New to Yoku? please <Link to="/register">register</Link>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;
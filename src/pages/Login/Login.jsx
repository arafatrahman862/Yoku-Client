import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = event => {
    event.preventDefault();
    form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
  }

  return (
    <div className="hero min-h-screen bg-white  ">
      <div className="hero-content flex-col   rounded">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Please Login</h1>

        </div>
        <div className="card  w-full max-w-lg shadow-2xl bg-base-100 ">
          <form onSubmit={handleLogin} className="card-body bg-orange-300  rounded">
            <div className="form-control">
              <label className="label ">
                <span className="label-text font-semibold text-white">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-white">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input  input-bordered" />

            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate></LoadCanvasTemplate>
              </label>
              <input type="text" name='captcha' placeholder="type the text above" className="input  input-bordered" />

            </div>
            <div className="form-control mt-6">

              <input className="btn btn-primary text-white" type="submit" value="login" />
            </div>
            <div className='text-white'>
              New to Yoku? please <Link to="/register">register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
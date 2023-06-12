import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import * as api from '../../api.js';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import {   FaGoogle } from 'react-icons/fa';


const Login = () => {

  const [disable, setDisable] = useState(true)
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log('handleLogin:', { email, password });

   

    api.login({ email, password, role: 'student' })
      .then(({ token }) => {
        // const user = result.user;
        // console.log('signIn', user)
        Swal.fire({
          title: 'login successful',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        navigate(from, { replace: true })
        localStorage.setItem('userAuth', token)
      });

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);})
    
      .catch(error => console.log(error))
  }

  const handleGoogle = ()=>{
    googleSignIn()
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);})
     .catch(error => console.log(error))
  }
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false)
    }

  }

  return (
    <div className="hero min-h-screen bg-white  ">
      <Helmet>
        <title>Yoku | Login</title>
      </Helmet>
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate></LoadCanvasTemplate>
              </label>
              <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the captcha" className="input text-white  input-bordered" />


            </div>
            <div className="form-control mt-6">

              <input disabled={disable} className="btn btn-primary text-white" type="submit" value="login" />
            </div>
            <div className='text-black'>
              New to Yoku? please <Link to="/singup"><span className='text-blue-700'>register</span></Link>
            </div>
            <div className='mx-auto'>
            <button onClick={handleGoogle} className="btn btn-outline btn-circle"><FaGoogle></FaGoogle></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;